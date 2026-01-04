import { useEffect, useRef, useState } from 'react';

interface JitsiMeetingProps {
  roomName: string;
  displayName: string;
  onClose: () => void;
  isArabic?: boolean;
}

declare global {
  interface Window {
    JitsiMeetExternalAPI: new (domain: string, options: JitsiMeetOptions) => JitsiApi;
  }
}

interface JitsiMeetOptions {
  roomName: string;
  parentNode: HTMLElement;
  width: string;
  height: string;
  configOverwrite: Record<string, unknown>;
  interfaceConfigOverwrite: Record<string, unknown>;
  userInfo?: {
    displayName: string;
  };
}

interface JitsiApi {
  dispose: () => void;
  executeCommand: (command: string, ...args: unknown[]) => void;
  addListener: (event: string, callback: (...args: unknown[]) => void) => void;
  getIFrame: () => HTMLIFrameElement;
}

export function JitsiMeeting({ roomName, displayName, onClose, isArabic }: JitsiMeetingProps) {
  const jitsiContainerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<JitsiApi | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Jitsi Meet External API script
    const loadJitsiScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.JitsiMeetExternalAPI) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Jitsi Meet API'));
        document.body.appendChild(script);
      });
    };

    const initJitsi = async () => {
      try {
        await loadJitsiScript();

        if (!jitsiContainerRef.current) return;

        // Sanitize room name (remove special characters)
        const sanitizedRoomName = roomName.replace(/[^a-zA-Z0-9]/g, '');
        const uniqueRoomName = `VClinic_${sanitizedRoomName}_${Date.now()}`;

        const api = new window.JitsiMeetExternalAPI('meet.jit.si', {
          roomName: uniqueRoomName,
          parentNode: jitsiContainerRef.current,
          width: '100%',
          height: '100%',
          configOverwrite: {
            startWithAudioMuted: false,
            startWithVideoMuted: false,
            prejoinPageEnabled: false,
            disableDeepLinking: true,
            disableInviteFunctions: true,
            enableClosePage: false,
            defaultLanguage: isArabic ? 'ar' : 'en',
            toolbarButtons: [
              'microphone',
              'camera',
              'desktop',
              'fullscreen',
              'hangup',
              'chat',
              'raisehand',
              'tileview',
              'settings',
            ],
            hideConferenceSubject: true,
            hideConferenceTimer: false,
            subject: ' ',
            constraints: {
              video: {
                height: {
                  ideal: 720,
                  max: 1080,
                  min: 180,
                },
              },
            },
          },
          interfaceConfigOverwrite: {
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            SHOW_BRAND_WATERMARK: false,
            BRAND_WATERMARK_LINK: '',
            SHOW_POWERED_BY: false,
            SHOW_PROMOTIONAL_CLOSE_PAGE: false,
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
            MOBILE_APP_PROMO: false,
            HIDE_INVITE_MORE_HEADER: true,
            DISABLE_TRANSCRIPTION_SUBTITLES: true,
            TOOLBAR_BUTTONS: [
              'microphone',
              'camera',
              'desktop',
              'fullscreen',
              'hangup',
              'chat',
              'raisehand',
              'tileview',
            ],
            SETTINGS_SECTIONS: ['devices', 'language'],
            VIDEO_LAYOUT_FIT: 'both',
            FILM_STRIP_MAX_HEIGHT: 120,
            VERTICAL_FILMSTRIP: false,
            DEFAULT_BACKGROUND: '#1E363A',
            DEFAULT_LOCAL_DISPLAY_NAME: displayName,
            DEFAULT_REMOTE_DISPLAY_NAME: isArabic ? 'الطبيب' : 'Doctor',
            PROVIDER_NAME: 'V Clinic',
          },
          userInfo: {
            displayName: displayName,
          },
        });

        apiRef.current = api;

        // Event listeners
        api.addListener('videoConferenceJoined', () => {
          setIsLoading(false);
        });

        api.addListener('videoConferenceLeft', () => {
          onClose();
        });

        api.addListener('readyToClose', () => {
          onClose();
        });

      } catch (err) {
        console.error('Jitsi initialization error:', err);
        setError(isArabic ? 'حدث خطأ في تحميل مكالمة الفيديو' : 'Error loading video call');
        setIsLoading(false);
      }
    };

    initJitsi();

    return () => {
      if (apiRef.current) {
        apiRef.current.dispose();
        apiRef.current = null;
      }
    };
  }, [roomName, displayName, onClose, isArabic]);

  if (error) {
    return (
      <div className="flex h-full items-center justify-center bg-deep">
        <div className="text-center">
          <div className="mb-4 text-6xl">⚠️</div>
          <p className="text-xl text-offwhite">{error}</p>
          <button
            onClick={onClose}
            className="mt-6 rounded-full bg-gold px-6 py-3 font-semibold text-deep transition hover:bg-gold/80"
          >
            {isArabic ? 'العودة' : 'Go Back'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-deep">
          <div className="text-center">
            <div className="mb-4 h-16 w-16 mx-auto animate-spin rounded-full border-4 border-gold/30 border-t-gold" />
            <p className="text-xl text-offwhite">
              {isArabic ? 'جاري تحميل مكالمة الفيديو...' : 'Loading video call...'}
            </p>
          </div>
        </div>
      )}
      <div
        ref={jitsiContainerRef}
        className="h-full w-full"
        style={{ minHeight: '500px' }}
      />
    </div>
  );
}
