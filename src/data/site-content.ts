import type { Locale } from '@/app/[locale]/layout';

type NavItem = {
  label: string;
  href: string;
};

type SectionList = {
  title: string;
  description: string;
  items: { title: string; description?: string }[];
};

type HeroContent = {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

type HighlightCard = {
  title: string;
  description: string;
  href: string;
};

type PageContent = {
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: SectionList[];
};

type SiteContent = {
  navigation: NavItem[];
  hero: HeroContent;
  highlights: HighlightCard[];
  story: {
    title: string;
    subtitle: string;
    body: string;
  };
  programs: SectionList;
  testimonials: {
    title: string;
    cases: { quote: string; name: string; detail: string }[];
  };
  insurance: SectionList;
  footer: {
    mission: string;
    contact: { phone: string; whatsapp: string; address: string; hours: string };
    rights: string;
  };
  pages: Record<
    | 'about'
    | 'departments'
    | 'obesity'
    | 'iv'
    | 'consultations'
    | 'programs'
    | 'telemedicine'
    | 'patientJourney'
    | 'insurance'
    | 'blog'
    | 'contact'
    | 'app',
    PageContent
  >;
};

export const siteContent: Record<Locale, SiteContent> = {
  ar: {
    navigation: [
      { label: 'الرئيسية', href: '/ar' },
      { label: 'من نحن', href: '/ar/about' },
      { label: 'الأقسام', href: '/ar/departments' },
      { label: 'البرامج', href: '/ar/programs' },
      { label: 'الطب الاتصالي', href: '/ar/telemedicine' },
      { label: 'تجربة المريض', href: '/ar/patient-journey' },
      { label: 'التأمين', href: '/ar/insurance' },
      { label: 'المدونة', href: '/ar/blog' },
      { label: 'اتصل بنا', href: '/ar/contact' }
    ],
    hero: {
      title: 'عافية مبنية على الدليل… وأنت محورها.',
      subtitle:
        'نرافقك بخدمات شاملة من الاستشارات الحضورية والاتصالية إلى البرامج الصحية المتخصصة، مع متابعة دقيقة ودفء إنساني في كل خطوة.',
      primaryCta: { label: 'احجز الآن', href: '/ar/patient-journey#book' },
      secondaryCta: { label: 'ابدأ الاستشارة', href: '/ar/telemedicine' }
    },
    highlights: [
      {
        title: 'مركز البدانة والغدد',
        description: 'متابعة متعددة التخصصات لضبط السكري والهرمونات وبرامج مخصصة لإدارة الوزن.',
        href: '/ar/obesity'
      },
      {
        title: 'العلاج الوريدي',
        description: 'جلسات طاقة، مناعة، جمال، وترطيب بإشراف طبي صارم ومعايير أمان عالية.',
        href: '/ar/iv'
      },
      {
        title: 'الطب الاتصالي',
        description: 'جلسات فيديو آمنة، وصفات إلكترونية، وخطط متابعة متكاملة من المنزل.',
        href: '/ar/telemedicine'
      }
    ],
    story: {
      title: 'رعاية قصتها معك',
      subtitle: 'من أول تواصل وحتى خطة التعافي، كل تفاعل مبني على الدليل ويحتفي بإنسانيتك.',
      body: 'أسس فريق V Clinic المنوّع نهجاً يمزج بين الطب المبني على الدليل والدفء العائلي. نستخدم التقنيات الحديثة لتنسيق المواعيد، التواصل المرن، وإدارة الملفات الطبية بثنائية اللغة، مع التزام بمعايير الخصوصية والأمان.'
    },
    programs: {
      title: 'برامج صحية بإشراف متعدد التخصصات',
      description: 'اختر برنامجاً يناسب احتياجك وتابع التقدّم عبر المهام الأسبوعية والاستشارات المنتظمة.',
      items: [
        { title: 'برنامج صحة الطفل', description: 'متابعة نمو، تغذية، ووقاية من الأمراض الشائعة.' },
        { title: 'برنامج متابعة الحمل', description: 'رحلة متكاملة للأم والجنين مع فحوصات دورية وتثقيف.' },
        { title: 'صحة المرأة', description: 'متابعة الهرمونات، صحة العظام، وبرامج ما بعد الولادة.' },
        { title: 'إدارة الأمراض المزمنة', description: 'خطط تحكم بالضغط، السكري، واضطرابات الغدد مع فريق متخصص.' },
        { title: 'برنامج الوزن الصحي', description: 'دعم غذائي، نشاط بدني، ومتابعة سلوكية لنتائج مستدامة.' }
      ]
    },
    testimonials: {
      title: 'قصص نجاح حقيقية',
      cases: [
        {
          quote: 'خلال ستة أشهر مع برنامج الوزن الصحي، خسرت 14 كلغ مع دعم أسبوعي من الفريق المتخصص.',
          name: 'سارة – جدة',
          detail: 'برنامج الوزن الصحي'
        },
        {
          quote: 'خدمة الطب الاتصالي أنقذت وقتي، استلمت الوصفة الإلكترونية خلال دقائق وبدأت الخطة فوراً.',
          name: 'عبدالله – مكة',
          detail: 'استشارة قلبية عن بعد'
        },
        {
          quote: 'متابعة السكر لدي أصبحت أسهل. أراجع التحاليل والملف الطبي بالعربية والإنجليزية بكل سهولة.',
          name: 'ليلى – الطائف',
          detail: 'مركز البدانة والسكري'
        }
      ]
    },
    insurance: {
      title: 'شركاء التأمين الصحي',
      description: 'نتعاون مع شركات كبرى لتسهيل دخولك للخدمة دون تعقيدات. فريق خدمة العملاء يساعدك في كل خطوة.',
      items: [
        { title: 'بوبا العربية' },
        { title: 'التعاونية' },
        { title: 'ميدغلف' },
        { title: 'سايكو' },
        { title: 'تكافل الراجحي' }
      ]
    },
    footer: {
      mission: 'نقدّم رعاية صحية ثنائية اللغة ومبنية على الدليل، مع تجربة إنسانية دافئة ومتسقة عبر الويب والتطبيق.',
      contact: {
        phone: '+966-12-000-0000',
        whatsapp: '+966-55-000-0000',
        address: 'جدة، حي الشاطئ، شارع العافية 12',
        hours: 'الأحد - الخميس: 9 ص - 9 م | الجمعة - السبت: 12 م - 8 م'
      },
      rights: '© 2024 V Clinic. جميع الحقوق محفوظة.'
    },
    pages: {
      about: {
        metaTitle: 'من نحن | V Clinic',
        metaDescription:
          'اكتشف قصة V Clinic ورسالتنا في تقديم رعاية صحية مبنية على الدليل وبأسلوب إنساني دافئ.',
        intro:
          'نلتزم في V Clinic بتجربة متكاملة تربط الطب الحديث بالتواصل الإنساني. يقودنا فريق متنوع من الأطباء والخبراء الصحيين الذين يؤمنون بأن المريض هو محور كل قرار.',
        sections: [
          {
            title: 'رؤيتنا',
            description:
              'أن نكون الوجهة الموثوقة للرعاية الصحية الشاملة في المنطقة، مع تجربة رقمية وسريرية سلسة بالعربية والإنجليزية.',
            items: []
          },
          {
            title: 'رسالتنا',
            description:
              'تقديم خدمات طبية مبنية على الدليل مع أدوات تقنية تدعم التواصل، المتابعة، وتخصيص الخطة العلاجية لكل مريض.',
            items: []
          },
          {
            title: 'قيمنا',
            description: '',
            items: [
              { title: 'الإنسانية', description: 'نهتم بالتفاصيل الصغيرة التي تصنع فرقاً في تجربة المريض.' },
              { title: 'الابتكار', description: 'نستخدم أحدث الأدوات الرقمية لدعم رعاية فعالة وآمنة.' },
              { title: 'الشفافية', description: 'نوفر معلومات واضحة وخطط علاجية مفهومة.' }
            ]
          },
          {
            title: 'فريقنا',
            description:
              'يضم V Clinic نخبة من الأطباء والاستشاريين: د. إسماعيل (رئيس الأطباء)، د. محمد (مركز الغدد)، وأحمد (إدارة تجربة المريض).',
            items: []
          }
        ]
      },
      departments: {
        metaTitle: 'الأقسام الطبية | V Clinic',
        metaDescription: 'تعرّف على الأقسام الطبية الرئيسية في V Clinic والخدمات التي تقدمها.',
        intro:
          'نقدم أقساماً متكاملة لتلبية احتياجات العائلة تحت سقف واحد، مع فرق متخصصة ومعايير جودة صارمة.',
        sections: [
          {
            title: 'الأقسام الرئيسية',
            description: '',
            items: [
              { title: 'الباطنة', description: 'متابعة الأمراض المزمنة، السكري، وضغط الدم.' },
              { title: 'الأسنان', description: 'عناية متكاملة للأسنان، التقويم، وزراعة الأسنان.' },
              { title: 'الأطفال', description: 'لقاحات، نمو، ورعاية طارئة.' },
              { title: 'النساء والولادة', description: 'متابعة الحمل، صحة المرأة، وعيادة ما بعد الولادة.' },
              { title: 'الجلدية والتجميل', description: 'حلول علاجية وتجميلية معتمدة.' },
              { title: 'الطوارئ', description: 'جاهزية على مدار الساعة مع فريق متعدد التخصصات.' }
            ]
          }
        ]
      },
      obesity: {
        metaTitle: 'مركز البدانة والسكري والغدد | V Clinic',
        metaDescription:
          'برامج متخصصة للسكري، الغدد، التغذية، والدعم النفسي مع فريق متعدد التخصصات.',
        intro:
          'يتكامل في المركز فريق الغدد الصماء، التغذية العلاجية، الدعم النفسي، والتعليم الصحي لتقديم خطة شاملة لكل مريض.',
        sections: [
          {
            title: 'العيادات الفرعية',
            description: '',
            items: [
              { title: 'الغدد الصماء', description: 'ضبط الهرمونات واضطرابات الغدة الدرقية.' },
              { title: 'السكري', description: 'خطط متابعة دقيقة مع أجهزة مراقبة حديثة.' },
              { title: 'السمنة', description: 'برامج غذائية وسلوكية وبرامج نشاط موجهة.' },
              { title: 'التغذية السريرية', description: 'خطط فردية بناءً على التحاليل والتقييم الشامل.' },
              { title: 'الدعم النفسي', description: 'جلسات نفسية لمساندة التغيير السلوكي.' },
              { title: 'القدم السكري', description: 'وقاية وعلاج بإشراف فريق مختص.' }
            ]
          },
          {
            title: 'البرامج',
            description: '',
            items: [
              { title: 'إدارة السمنة', description: 'خطط تدريجية مع قياس دوري للنتائج.' },
              { title: 'ضبط السكري', description: 'مراقبة مستمرة، استشارات عن بعد، وتثقيف عائلي.' },
              { title: 'توازن الهرمونات', description: 'علاج تكميلي مع متابعة دقيقة للتحاليل.' }
            ]
          }
        ]
      },
      iv: {
        metaTitle: 'وحدة العلاج الوريدي | V Clinic',
        metaDescription:
          'جلسات وريدية للطاقة، المناعة، الجمال، الرياضيين، والترطيب مع بروتوكولات أمان واضحة.',
        intro:
          'صُممت الوحدة لتقديم علاجات وريدية مخصصة تحت إشراف طبي معتمد وبروتوكولات سلامة دقيقة.',
        sections: [
          {
            title: 'الباقات المتاحة',
            description: '',
            items: [
              { title: 'طاقة', description: 'مزيج فيتامينات ومعادن يدعم النشاط اليومي.' },
              { title: 'مناعة', description: 'تعزيز مقاومة الجسم خلال مواسم العدوى.' },
              { title: 'جمال', description: 'تركيبات لصحة البشرة والشعر.' },
              { title: 'الرياضيين', description: 'استعادة سريعة للسوائل والمعادن بعد التدريب.' },
              { title: 'الترطيب', description: 'دعم الجسم بعد السفر أو الإجهاد الحراري.' }
            ]
          },
          {
            title: 'إرشادات السلامة',
            description:
              'يتم تقييم التاريخ الطبي، العلامات الحيوية، وحساسية الأدوية قبل كل جلسة. نعتذر عن تقديم الخدمة للحامل في الثلث الأول أو مرضى قصور القلب غير المستقر.',
            items: []
          }
        ]
      },
      consultations: {
        metaTitle: 'العيادات الاستشارية | V Clinic',
        metaDescription: 'استشارات تخصصية تشمل أمراض القلب، الرئة، الكلى، الدم، المناعة، الألم، الأعصاب، الروماتيزم، والمسالك.',
        intro:
          'نوفّر عيادات استشارية متقدمة بخيارات حضورية واتصالية لضمان وصول سريع إلى الخبراء.',
        sections: [
          {
            title: 'التخصصات',
            description: '',
            items: [
              { title: 'القلب', description: 'متابعة أمراض القلب والشرايين وتخطيط القلب.' },
              { title: 'الرئة', description: 'علاج الربو واضطرابات النوم التنفسية.' },
              { title: 'الكلى', description: 'متابعة وظائف الكلى والغسيل المنزلي.' },
              { title: 'الدم', description: 'فحوصات سيولة، أمراض الدم الوراثية، ونقص الفيتامينات.' },
              { title: 'المناعة والحساسية', description: 'اختبارات جلدية وخطط مناعية مخصصة.' },
              { title: 'الألم', description: 'عيادة إدارة الألم المزمن وتسكين الأعصاب.' },
              { title: 'الأعصاب', description: 'اضطرابات الحركة، الصداع، والصرع.' },
              { title: 'الروماتيزم', description: 'علاج التهابات المفاصل، الذئبة، والنقرس.' },
              { title: 'المسالك والذكورة', description: 'صحة المسالك، الخصوبة، وضعف الانتصاب.' },
              { title: 'الكبد والجهاز الهضمي', description: 'تنظير، كبد دهني، ومتلازمة القولون العصبي.' }
            ]
          }
        ]
      },
      programs: {
        metaTitle: 'البرامج الصحية | V Clinic',
        metaDescription:
          'برامج متكاملة للأطفال، الحمل، صحة المرأة، كبار السن، الأمراض المزمنة، وإدارة الوزن.',
        intro:
          'كل برنامج يشمل جدول زيارات، مهام رقمية، وتذكيرات عبر التطبيق مع تقارير تقدم واضحة.',
        sections: [
          {
            title: 'البرامج المتاحة',
            description: '',
            items: [
              { title: 'صحة الطفل', description: 'متابعة نمو وتغذية مع دعم تثقيفي للأسرة.' },
              { title: 'متابعة الحمل', description: 'زيارات مجدولة، تحاليل، ودروس ولادة.' },
              { title: 'صحة المرأة', description: 'توازن الهرمونات، صحة العظام، وفحوصات وقائية.' },
              { title: 'كبار السن', description: 'إدارة متعددة للأدوية والتغذية والنشاط.' },
              { title: 'الأمراض المزمنة', description: 'خطط متخصصة للضغط، السكري، واضطرابات الغدد.' },
              { title: 'إدارة الوزن', description: 'خطة شاملة مع دعم نفسي وسلوكي.' }
            ]
          }
        ]
      },
      telemedicine: {
        metaTitle: 'الطب الاتصالي | V Clinic',
        metaDescription:
          'استشارات فيديو عالية الدقة، محادثات آمنة، وصفات إلكترونية، ودفع رقمي متكامل.',
        intro:
          'يمكنك بدء الاستشارة من المنزل بخطوات بسيطة مع حفظ الموافقات وتوثيق الجلسة بالكامل.',
        sections: [
          {
            title: 'مزايا الخدمة',
            description: '',
            items: [
              { title: 'فيديو HD', description: 'جلسات ثابتة الجودة مع أدوات مشاركة الشاشة.' },
              { title: 'دردشة مشفرة', description: 'تواصل آمن مع الفريق وتبادل ملفات التحاليل.' },
              { title: 'وصفة إلكترونية', description: 'تحميل وصفة PDF مع ختم رقمي.' },
              { title: 'المدفوعات', description: 'بوابات موثوقة تدعم البطاقات والمدفوعات المحلية.' },
              { title: 'التلخيص', description: 'ملخص تلقائي مع توصيات ومواعيد متابعة.' }
            ]
          },
          {
            title: 'التدفق الكامل',
            description:
              'اختر التخصص والطبيب، وافق على بنود الخصوصية، ابدأ الجلسة، واستلم التوصيات والوصفة مباشرةً في ملفك الطبي.',
            items: []
          }
        ]
      },
      patientJourney: {
        metaTitle: 'تجربة المريض | V Clinic',
        metaDescription: 'تعرّف على خطوات الرحلة من الحجز وحتى التقييم بعد الزيارة مع أدوات المتابعة الرقمية.',
        intro:
          'نرسم رحلة سلسة تبدأ من الحجز الرقمي وتنتهي بتقييم تجربتك لنطوّر خدماتنا باستمرار.',
        sections: [
          {
            title: 'خطوات الرحلة',
            description: '',
            items: [
              { title: 'الحجز', description: 'اختر العيادة أو الطبيب، التاريخ، والوقت المناسب لك.' },
              { title: 'الاستقبال', description: 'ترحيب دافئ وتأكيد بيانات التأمين والمدفوعات.' },
              { title: 'الزيارة', description: 'خطة علاجية واضحة مع مواد تثقيفية بالعربية والإنجليزية.' },
              { title: 'المتابعة', description: 'تذكيرات بالمواعيد ورسائل مخصصة لمتابعة الحالة.' },
              { title: 'التغذية الراجعة', description: 'شارك تقييمك ونقاط التحسين لنرتقي بالخدمة.' }
            ]
          }
        ]
      },
      insurance: {
        metaTitle: 'التأمين الصحي | V Clinic',
        metaDescription: 'دليل استخدام التأمين الصحي في V Clinic مع قائمة الشركاء والخطوات الأساسية.',
        intro:
          'فريقنا ينسّق مع مزود التأمين للتحقق من التغطية وتسهيل الموافقات قبل زيارتك.',
        sections: [
          {
            title: 'كيفية الاستخدام',
            description:
              'أرسل بطاقة التأمين عبر التطبيق، استلم الموافقة المسبقة، ثم استخدم رقم الحجز عند الوصول. نساعدك في جميع المطالبات.',
            items: []
          },
          {
            title: 'الشركاء',
            description: '',
            items: [
              { title: 'بوبا العربية' },
              { title: 'التعاونية' },
              { title: 'ميدغلف' },
              { title: 'سايكو' },
              { title: 'تكافل الراجحي' }
            ]
          }
        ]
      },
      blog: {
        metaTitle: 'المدونة والتثقيف | V Clinic',
        metaDescription:
          'مقالات صحية، إرشادات نمط حياة، وأخبار العيادة لكل العائلة.',
        intro:
          'تصفح محتوى تثقيفي منسّق من الفريق الطبي يغطي أحدث الأدلة والنصائح العملية.',
        sections: [
          {
            title: 'موضوعات مميزة',
            description: '',
            items: [
              { title: 'دليل الصيام الصحي لمرضى السكري' },
              { title: 'خطوات عملية لتعزيز المناعة في الشتاء' },
              { title: 'كيف تستعد لموعدك الأول في عيادة الغدد' }
            ]
          }
        ]
      },
      contact: {
        metaTitle: 'اتصل بنا | V Clinic',
        metaDescription: 'معلومات التواصل، الموقع، ساعات العمل، ونموذج الحجز.',
        intro:
          'يسعدنا تواصلك عبر الهاتف، واتساب، أو النموذج الإلكتروني. فريق خدمة العملاء جاهز لمساعدتك.',
        sections: [
          {
            title: 'بيانات التواصل',
            description: '',
            items: [
              { title: 'الهاتف', description: '+966-12-000-0000' },
              { title: 'واتساب', description: '+966-55-000-0000' },
              { title: 'الموقع', description: 'جدة، حي الشاطئ، شارع العافية 12' },
              { title: 'ساعات العمل', description: 'الأحد - الخميس: 9 ص - 9 م | الجمعة - السبت: 12 م - 8 م' }
            ]
          }
        ]
      },
      app: {
        metaTitle: 'التطبيق | V Clinic',
        metaDescription: 'مزايا تطبيق V Clinic وروابط التنزيل لمتابعة صحتك أينما كنت.',
        intro:
          'حمّل التطبيق لإدارة المواعيد، الاستشارات الاتصالية، والبرامج الصحية مع إشعارات فورية.',
        sections: [
          {
            title: 'روابط التحميل',
            description: '',
            items: [
              { title: 'App Store', description: 'قريباً' },
              { title: 'Google Play', description: 'قريباً' }
            ]
          },
          {
            title: 'مزايا التطبيق',
            description: '',
            items: [
              { title: 'لوحة تحكم شخصية', description: 'مواعيد، برامج، وسجلات في مكان واحد.' },
              { title: 'إشعارات ذكية', description: 'تذكير بالزيارات، المهام، والنتائج الجديدة.' },
              { title: 'ملف طبي متكامل', description: 'الزيارات، التحاليل، والوصفات محفوظة بثنائية اللغة.' }
            ]
          }
        ]
      }
    }
  },
  en: {
    navigation: [
      { label: 'Home', href: '/en' },
      { label: 'About', href: '/en/about' },
      { label: 'Departments', href: '/en/departments' },
      { label: 'Programs', href: '/en/programs' },
      { label: 'Telemedicine', href: '/en/telemedicine' },
      { label: 'Patient Journey', href: '/en/patient-journey' },
      { label: 'Insurance', href: '/en/insurance' },
      { label: 'Blog', href: '/en/blog' },
      { label: 'Contact', href: '/en/contact' }
    ],
    hero: {
      title: 'Evidence-based wellness, centered around you.',
      subtitle:
        'From in-clinic consults to telemedicine and structured programs, our bilingual team supports every milestone with empathy and rigor.',
      primaryCta: { label: 'Book Now', href: '/en/patient-journey#book' },
      secondaryCta: { label: 'Start Consultation', href: '/en/telemedicine' }
    },
    highlights: [
      {
        title: 'Obesity & Endocrine Center',
        description: 'Multidisciplinary care for diabetes control, hormone balance, and tailored weight plans.',
        href: '/en/obesity'
      },
      {
        title: 'IV & Vitamin Therapy',
        description: 'Energy, immunity, beauty, athletic recovery, and hydration under physician supervision.',
        href: '/en/iv'
      },
      {
        title: 'Telemedicine',
        description: 'Secure HD video visits, e-prescriptions, and structured follow-up from anywhere.',
        href: '/en/telemedicine'
      }
    ],
    story: {
      title: 'Care that grows with you',
      subtitle: 'Every encounter is backed by evidence and wrapped in warmth—from your first message to your recovery plan.',
      body: 'The multidisciplinary V Clinic team blends clinical rigor with a family-first spirit. We orchestrate scheduling, communication, and medical record management in both Arabic and English while honoring strict privacy and safety standards.'
    },
    programs: {
      title: 'Health programs with multidisciplinary oversight',
      description:
        'Select a program that fits your goals and track progress through weekly tasks, tele-visits, and proactive coaching.',
      items: [
        { title: 'Child Health', description: 'Growth milestones, nutrition guidance, and preventive care.' },
        { title: 'Pregnancy Journey', description: 'Integrated prenatal visits, screenings, and childbirth education.' },
        { title: 'Women’s Health', description: 'Hormone balance, bone health, and postnatal support.' },
        { title: 'Chronic Conditions', description: 'Blood pressure, diabetes, and endocrine management with data-driven care.' },
        { title: 'Healthy Weight', description: 'Nutrition, movement, and behavioral change for lasting results.' }
      ]
    },
    testimonials: {
      title: 'Real patient stories',
      cases: [
        {
          quote: 'With the healthy weight program I safely lost 14 kg in six months thanks to weekly coaching.',
          name: 'Sara – Jeddah',
          detail: 'Healthy Weight Program'
        },
        {
          quote: 'Telemedicine saved my commute—I received an e-prescription within minutes and started the plan right away.',
          name: 'Abdullah – Makkah',
          detail: 'Cardiology Tele-visit'
        },
        {
          quote: 'Monitoring my diabetes is easier now. I can review labs and notes bilingually without friction.',
          name: 'Laila – Taif',
          detail: 'Obesity & Endocrine Center'
        }
      ]
    },
    insurance: {
      title: 'Insurance partners',
      description:
        'We collaborate with leading payers to simplify access. Our concierge team supports every pre-approval and claim.',
      items: [
        { title: 'Bupa Arabia' },
        { title: 'Tawuniya' },
        { title: 'Medgulf' },
        { title: 'SAICO' },
        { title: 'Al Rajhi Takaful' }
      ]
    },
    footer: {
      mission:
        'Delivering bilingual, evidence-based healthcare with a warm human touch across every web and mobile interaction.',
      contact: {
        phone: '+966-12-000-0000',
        whatsapp: '+966-55-000-0000',
        address: 'Jeddah, Ash Shati District, Al-Afiya Street 12',
        hours: 'Sun-Thu: 9am - 9pm | Fri-Sat: 12pm - 8pm'
      },
      rights: '© 2024 V Clinic. All rights reserved.'
    },
    pages: {
      about: {
        metaTitle: 'About | V Clinic',
        metaDescription:
          'Learn about V Clinic’s story and mission to deliver bilingual, evidence-based healthcare with genuine warmth.',
        intro:
          'V Clinic combines cutting-edge medicine with human-centered communication. Our diverse team of physicians and health experts keeps every patient at the core of each decision.',
        sections: [
          {
            title: 'Vision',
            description:
              'To become the trusted destination for comprehensive healthcare in the region through seamless Arabic-English experiences.',
            items: []
          },
          {
            title: 'Mission',
            description:
              'Provide evidence-based services supported by technology that powers communication, follow-up, and personalized plans.',
            items: []
          },
          {
            title: 'Values',
            description: '',
            items: [
              { title: 'Humanity', description: 'We care about every detail that shapes a comforting patient journey.' },
              { title: 'Innovation', description: 'Modern digital tools enable safe, effective, and proactive care.' },
              { title: 'Transparency', description: 'Clear information and treatment plans that patients can trust.' }
            ]
          },
          {
            title: 'Our Team',
            description:
              'Meet Dr. Ismail (Chief Medical Officer), Dr. Mohammed (Endocrine Center Lead), and Ahmed (Patient Experience Director).',
            items: []
          }
        ]
      },
      departments: {
        metaTitle: 'Medical Departments | V Clinic',
        metaDescription: 'Explore V Clinic’s core departments and the services they deliver.',
        intro:
          'A unified clinic for the entire family with specialized teams and uncompromising quality standards.',
        sections: [
          {
            title: 'Departments',
            description: '',
            items: [
              { title: 'Internal Medicine', description: 'Chronic disease management, diabetes, and hypertension.' },
              { title: 'Dentistry', description: 'Comprehensive dentistry, orthodontics, and implants.' },
              { title: 'Pediatrics', description: 'Vaccinations, development, and urgent care.' },
              { title: 'OB-GYN', description: 'Prenatal care, women’s health, and postnatal visits.' },
              { title: 'Dermatology & Aesthetics', description: 'Evidence-based dermatology and cosmetic solutions.' },
              { title: 'Urgent Care', description: '24/7 readiness with a multi-disciplinary rapid response team.' }
            ]
          }
        ]
      },
      obesity: {
        metaTitle: 'Obesity & Endocrine Center | V Clinic',
        metaDescription:
          'Specialized programs for diabetes, hormone balance, nutrition, and psychological support.',
        intro:
          'Endocrinology, clinical nutrition, psychology, and health education collaborate to deliver holistic plans.',
        sections: [
          {
            title: 'Sub-clinics',
            description: '',
            items: [
              { title: 'Endocrinology', description: 'Thyroid, adrenal, and hormone optimization.' },
              { title: 'Diabetes', description: 'Continuous monitoring and remote consultations.' },
              { title: 'Obesity', description: 'Nutrition and behavior protocols for sustainable weight loss.' },
              { title: 'Clinical Nutrition', description: 'Personalized plans based on labs and lifestyle.' },
              { title: 'Psychological Support', description: 'Counseling to reinforce healthy habits.' },
              { title: 'Diabetic Foot', description: 'Preventive and therapeutic podiatry.' }
            ]
          },
          {
            title: 'Programs',
            description: '',
            items: [
              { title: 'Weight Management', description: 'Gradual milestones with measurable outcomes.' },
              { title: 'Diabetes Control', description: 'Remote coaching, structured follow-up, and family education.' },
              { title: 'Hormone Balance', description: 'Complementary therapies with close lab oversight.' }
            ]
          }
        ]
      },
      iv: {
        metaTitle: 'IV & Vitamin Therapy | V Clinic',
        metaDescription:
          'IV drips for energy, immunity, beauty, athletes, and hydration with explicit safety guidelines.',
        intro:
          'Each drip is physician-reviewed with thorough pre-assessment to secure the best outcome.',
        sections: [
          {
            title: 'Signature Drips',
            description: '',
            items: [
              { title: 'Energy', description: 'Vitamin blends that recharge your day.' },
              { title: 'Immunity', description: 'Support your immune system during peak seasons.' },
              { title: 'Beauty', description: 'Skin and hair nourishment from within.' },
              { title: 'Athletes', description: 'Rapid recovery after intense performance.' },
              { title: 'Hydration', description: 'Restore balance after travel or heat exposure.' }
            ]
          },
          {
            title: 'Safety Notes',
            description:
              'We review medical history, vitals, and allergies before every session. Service is unavailable for first-trimester pregnancies or unstable heart failure cases.',
            items: []
          }
        ]
      },
      consultations: {
        metaTitle: 'Consultation Clinics | V Clinic',
        metaDescription:
          'Cardiology, pulmonology, nephrology, hematology, immunology & allergy, pain, neurology, rheumatology, urology & andrology, hepatology & gastroenterology.',
        intro:
          'Specialty clinics with onsite and tele options ensure rapid access to experts.',
        sections: [
          {
            title: 'Specialties',
            description: '',
            items: [
              { title: 'Cardiology', description: 'Heart disease management and cardiac imaging.' },
              { title: 'Pulmonology', description: 'Asthma, COPD, and sleep-breathing disorders.' },
              { title: 'Nephrology', description: 'Kidney function follow-up and home dialysis support.' },
              { title: 'Hematology', description: 'Coagulation studies, inherited disorders, vitamin deficiencies.' },
              { title: 'Immunology & Allergy', description: 'Skin testing and personalized immunotherapy.' },
              { title: 'Pain', description: 'Chronic pain interventions and nerve blocks.' },
              { title: 'Neurology', description: 'Movement disorders, headache clinics, epilepsy care.' },
              { title: 'Rheumatology', description: 'Autoimmune conditions, joint inflammation, gout.' },
              { title: 'Urology & Andrology', description: 'Men’s health, fertility, and urinary care.' },
              { title: 'Hepato-Gastro', description: 'Endoscopy, fatty liver, and IBS management.' }
            ]
          }
        ]
      },
      programs: {
        metaTitle: 'Health Programs | V Clinic',
        metaDescription:
          'Comprehensive programs for children, pregnancy, women’s health, seniors, chronic disease, and weight management.',
        intro:
          'Each program includes scheduled visits, digital tasks, and notifications with transparent progress reports.',
        sections: [
          {
            title: 'Programs',
            description: '',
            items: [
              { title: 'Child Program', description: 'Milestone tracking and prevention for the whole family.' },
              { title: 'Pregnancy Follow-up', description: 'Structured prenatal visits and diagnostic screenings.' },
              { title: 'Women’s Health', description: 'Hormonal wellness, preventive screenings, and postpartum care.' },
              { title: 'Seniors', description: 'Medication reconciliation, nutrition, and safe mobility.' },
              { title: 'Chronic Disease', description: 'Personalized plans for long-term stability.' },
              { title: 'Weight Management', description: 'Integrated coaching and biometric monitoring.' }
            ]
          }
        ]
      },
      telemedicine: {
        metaTitle: 'Telemedicine | V Clinic',
        metaDescription:
          'HD video consults, secure chat, e-prescription PDFs, payments, scheduling, and consult summaries.',
        intro:
          'Launch a remote visit within minutes while consent logs and audit trails keep your data safe.',
        sections: [
          {
            title: 'Features',
            description: '',
            items: [
              { title: 'HD Video', description: 'Reliable calls with screen sharing tools.' },
              { title: 'Secure Chat', description: 'Encrypted messaging to exchange files and updates.' },
              { title: 'E-prescriptions', description: 'Download signed PDFs instantly.' },
              { title: 'Payments', description: 'Trusted gateways for cards and local methods.' },
              { title: 'Summaries', description: 'Automated notes and follow-up scheduling.' }
            ]
          },
          {
            title: 'Full Flow',
            description:
              'Select the specialty and doctor, review consent, start the session, and receive the plan straight into your medical record.',
            items: []
          }
        ]
      },
      patientJourney: {
        metaTitle: 'Patient Journey | V Clinic',
        metaDescription:
          'Understand the end-to-end steps from booking to feedback with digital follow-up tools.',
        intro:
          'A carefully designed flow that starts with digital booking and ends with feedback to keep elevating our service.',
        sections: [
          {
            title: 'Journey Steps',
            description: '',
            items: [
              { title: 'Booking', description: 'Pick your clinic, doctor, preferred date, and time.' },
              { title: 'Reception', description: 'Warm welcome, insurance verification, and payments.' },
              { title: 'Visit', description: 'Clear treatment plan with bilingual education materials.' },
              { title: 'Follow-up', description: 'Reminders and personalized messages to stay on track.' },
              { title: 'Feedback', description: 'Share ratings and suggestions that power improvement.' }
            ]
          }
        ]
      },
      insurance: {
        metaTitle: 'Insurance | V Clinic',
        metaDescription: 'How to use insurance at V Clinic along with partner list and main steps.',
        intro:
          'Our concierge team coordinates with your payer for coverage checks and pre-approvals before you arrive.',
        sections: [
          {
            title: 'How it works',
            description:
              'Upload your insurance card in the app, receive pre-approval, then show your booking code on arrival. We handle every claim with you.',
            items: []
          },
          {
            title: 'Partners',
            description: '',
            items: [
              { title: 'Bupa Arabia' },
              { title: 'Tawuniya' },
              { title: 'Medgulf' },
              { title: 'SAICO' },
              { title: 'Al Rajhi Takaful' }
            ]
          }
        ]
      },
      blog: {
        metaTitle: 'Blog & Education | V Clinic',
        metaDescription: 'Health articles, guides, and clinic news for every family member.',
        intro:
          'Curated educational content from our medical team with the latest evidence and actionable tips.',
        sections: [
          {
            title: 'Featured topics',
            description: '',
            items: [
              { title: 'Safe fasting guide for people with diabetes' },
              { title: 'Practical steps to boost immunity this winter' },
              { title: 'How to prepare for your first endocrine visit' }
            ]
          }
        ]
      },
      contact: {
        metaTitle: 'Contact | V Clinic',
        metaDescription: 'Reach V Clinic via phone, WhatsApp, location, hours, and booking form.',
        intro:
          'We welcome your calls, messages, and online requests. Our customer care team is always ready to help.',
        sections: [
          {
            title: 'Contact details',
            description: '',
            items: [
              { title: 'Phone', description: '+966-12-000-0000' },
              { title: 'WhatsApp', description: '+966-55-000-0000' },
              { title: 'Location', description: 'Jeddah, Ash Shati District, Al-Afiya Street 12' },
              { title: 'Working hours', description: 'Sun-Thu: 9am - 9pm | Fri-Sat: 12pm - 8pm' }
            ]
          }
        ]
      },
      app: {
        metaTitle: 'App | V Clinic',
        metaDescription: 'Discover the V Clinic app features and download links to stay on top of your health.',
        intro:
          'Manage appointments, tele-visits, and programs with real-time notifications by downloading the app.',
        sections: [
          {
            title: 'Download links',
            description: '',
            items: [
              { title: 'App Store', description: 'Coming soon' },
              { title: 'Google Play', description: 'Coming soon' }
            ]
          },
          {
            title: 'App features',
            description: '',
            items: [
              { title: 'Personal dashboard', description: 'Appointments, programs, and records in one hub.' },
              { title: 'Smart notifications', description: 'Reminders for visits, tasks, and new results.' },
              { title: 'Complete medical record', description: 'Visits, labs, and prescriptions stored bilingually.' }
            ]
          }
        ]
      }
    }
  }
};
