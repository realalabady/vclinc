import type { Locale } from '@/lib/locales';

type NavItem = {
  label: string;
  href: string;
};

type SectionList = {
  title: string;
  description: string;
  items: { title: string; description?: string; href?: string }[];
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
    | 'obgyn'
    | 'dermatology'
    | 'emergency'
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
      { label: 'مركز البدانة والغدد', href: '/ar/obesity' },
      { label: 'العلاج الوريدي', href: '/ar/iv' },
      { label: 'العيادات الاستشارية', href: '/ar/consultations' },
      { label: 'البرامج', href: '/ar/programs' },
      { label: 'الطب الاتصالي', href: '/ar/telemedicine' },
      { label: 'تجربة المريض', href: '/ar/patient-journey' },
      { label: 'التأمين', href: '/ar/insurance' },
      { label: 'المدونة', href: '/ar/blog' },
      { label: 'التطبيق', href: '/ar/app' },
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
        { title: 'ملاذ' },
        { title: 'الاتحاد التجاري (UCA)' },
        { title: 'غلوب مد' }
      ]
    },
    footer: {
      mission: 'نقدّم رعاية صحية ثنائية اللغة ومبنية على الدليل، مع تجربة إنسانية دافئة ومتسقة عبر الويب والتطبيق.',
      contact: {
        phone: '9200XXXXX',
        whatsapp: '+966-55-000-0000',
        address: 'جدة، المملكة العربية السعودية',
        hours: 'من السبت إلى الخميس، 9 صباحاً - 9 مساءً'
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
              { title: 'النساء والولادة', description: 'متابعة الحمل، الولادة الطبيعية والقيصرية، وعلاج الأمراض النسائية.', href: '/ar/obgyn' },
              { title: 'الجلدية والتجميل', description: 'علاج الأمراض الجلدية والإجراءات التجميلية غير الجراحية.', href: '/ar/dermatology' },
              { title: 'الطوارئ', description: 'استقبال الحالات الطارئة على مدار الساعة مع فريق متعدد التخصصات.', href: '/ar/emergency' },
              { title: 'الباطنة', description: 'متابعة الأمراض المزمنة، السكري، وضغط الدم.' },
              { title: 'الأسنان', description: 'عناية متكاملة للأسنان، التقويم، وزراعة الأسنان.' },
              { title: 'الأطفال', description: 'لقاحات، نمو، ورعاية طارئة.' }
            ]
          }
        ]
      },
      obgyn: {
        metaTitle: 'قسم النساء والولادة | V Clinic',
        metaDescription: 'رعاية شاملة للمرأة من المراهقة إلى سنوات النضج، مع متابعة الحمل والولادة وعلاج الأمراض النسائية.',
        intro: 'أنتِ قصة متجددة من القوة والحياة، وفي قسم النساء والولادة، نحن هنا للاحتفال بكل فصل من قصتك. من الاستشارة الأولى في سن المراهقة، مروراً باللحظات السحرية للأمومة، إلى سنوات النضج والحكمة، طبيبتك هي شريكتك التي تفهمك وتقدم لك الدعم والرعاية التي تستحقينها.',
        sections: [
          {
            title: 'الخدمات الرئيسية',
            description: '',
            items: [
              { title: 'متابعة الحمل والولادة', description: 'متابعة دورية للحمل، الولادة الطبيعية والقيصرية مع فريق متخصص.' },
              { title: 'تشخيص وعلاج الأمراض النسائية', description: 'علاج متنوع للأمراض النسائية المختلفة.' },
              { title: 'تنظيم الأسرة', description: 'استشارات وطرق تنظيم الأسرة المختلفة.' },
              { title: 'الكشف المبكر', description: 'فحص عنق الرحم والثدي للكشف المبكر عن السرطان.' },
              { title: 'علاج العقم', description: 'علاج مشاكل الخصوبة وتأخر الإنجاب.' },
              { title: 'رعاية ما بعد انقطاع الطمث', description: 'دعم ورعاية في مرحلة انقطاع الطمث.' }
            ]
          },
          {
            title: 'رسالة ختامية',
            description: 'صحتك هي قوتك. عافيتك هي أساس قوتك وإشراقك في جميع جوانب حياتك. لا تتجاهلي أي إشارة، ولا تترددي في طلب المشورة. نحن هنا لنقدم لك الرعاية التي تمكنك من عيش حياتك بصحة كاملة وثقة. احجزي موعدك اليوم، واستثمري في أغلى ما تملكين: صحتك.',
            items: []
          }
        ]
      },
      dermatology: {
        metaTitle: 'قسم الجلدية والتجميل | V Clinic',
        metaDescription: 'علاج الأمراض الجلدية والإجراءات التجميلية غير الجراحية بأحدث التقنيات.',
        intro: 'بشرتك هي مرآة لصحتك الداخلية وقصتك مع الحياة. في قسم الجلدية والتجميل، نحن لا نعالج مشاكل البشرة فحسب، بل نساعدك على استعادة إشراقتك الطبيعية وثقتك بنفسك. نؤمن أن الجمال الحقيقي ينبع من بشرة صحية، ولهذا نجمع بين أحدث التقنيات التجميلية والفهم العميق لبيولوجيا الجلد.',
        sections: [
          {
            title: 'أبرز الخدمات',
            description: '',
            items: [
              { title: 'علاج الأمراض الجلدية', description: 'علاج حب الشباب، الإكزيما، والصدفية.' },
              { title: 'الإجراءات التجميلية', description: 'البوتوكس، الفيلر، وشد الخيوط غير الجراحي.' },
              { title: 'جلسات نضارة البشرة', description: 'التقشير الكيميائي، الميزوثيرابي، والبلازما.' },
              { title: 'إزالة الشعر بالليزر', description: 'باستخدام أحدث الأجهزة المعتمدة.' },
              { title: 'علاج تساقط الشعر', description: 'علاج مشاكل فروة الرأس وتساقط الشعر.' }
            ]
          },
          {
            title: 'ختام',
            description: 'أطلق العنان لجمالك الطبيعي. جمالك يستحق أن يراه العالم. لا تدع مشاكل البشرة تخفي تألقك. دع خبراءنا يساعدونك في الكشف عن أفضل نسخة من بشرتك، لتعكس روحك المشرقة. احجز استشارتك التجميلية الآن، ودع جمالك يتحدث عنك.',
            items: []
          }
        ]
      },
      emergency: {
        metaTitle: 'قسم الطوارئ | V Clinic',
        metaDescription: 'خدمة طوارئ على مدار الساعة مع فريق مدرب على أعلى المستويات لاستقبال جميع الحالات الطارئة.',
        intro: 'هناك لحظات في الحياة لا تحتمل الانتظار. في قسم الطوارئ بـ V Clinic، نحن ندرك قيمة كل ثانية. فريقنا المدرب على أعلى المستويات جاهز على مدار الساعة لاستقبال الحالات الطارئة بسرعة، كفاءة، وهدوء يبعث على الطمأنينة.',
        sections: [
          {
            title: 'أبرز الخدمات',
            description: '',
            items: [
              { title: 'استقبال جميع الحالات الطارئة', description: 'تقييم سريع وشامل لجميع الحالات الطبية الطارئة.' },
              { title: 'التدخل السريع', description: 'معالجة فورية في حالات الإصابات والحوادث.' },
              { title: 'علاج الحالات الحرجة', description: 'إدارة الأزمات القلبية، الجلطات، والصدمات.' },
              { title: 'وحدة إنعاش مجهزة', description: 'وحدة إنعاش مجهزة بالكامل بأحدث المعدات.' },
              { title: 'إسعافات أولية', description: 'تقديم الإسعافات الأولية والرعاية العاجلة.' }
            ]
          },
          {
            title: 'راحتك تبدأ هنا',
            description: 'في أوقات الشدة، وجود يد أمينة تمسك بيدك يمكن أن يصنع كل الفرق. قسم الطوارئ في V Clinic هو أكثر من مجرد مكان للعلاج، إنه ملاذك الآمن في أصعب الظروف. صحتك وسلامتك هي همنا الأول، في كل لحظة، وكل يوم.',
            items: []
          }
        ]
      },
      obesity: {
        metaTitle: 'مركز البدانة والسكري والغدد الصماء | V Clinic',
        metaDescription:
          'برامج متخصصة للسكري، الغدد، التغذية، والدعم النفسي مع فريق متعدد التخصصات.',
        intro:
          'في مركزنا المتخصص، نحن لا نرى السمنة أو السكري أو اضطراب الهرمونات كأرقام على ميزان أو في تقرير طبي. نحن نرى القصة خلف هذا الخلل. قصة جسد يبحث عن توازنه، وروح تتوق إلى استعادة حيويتها. نؤمن بأن استعادة التوازن رحلة شخصية عميقة، تتطلب فهماً علمياً دقيقاً ودعماً إنسانياً لا يتزعزع.',
        sections: [
          {
            title: 'العيادات الفرعية',
            description: '',
            items: [
              { title: 'عيادة الغدد الصماء', description: 'لحل ألغاز الهرمونات واستعادة تناغم الجسم.' },
              { title: 'عيادة السكري', description: 'إدارة شاملة للسكري بنظرة جديدة تمكنك من التحكم بحياتك.' },
              { title: 'عيادة البدانة', description: 'نهج متكامل يتجاوز الحمية، ويركز على تغيير نمط الحياة المستدام.' },
              { title: 'عيادة التغذية العلاجية', description: 'غذاؤك هو دواؤك، وخبراؤنا يرسمون لك خطة تغذية تشبهك.' },
              { title: 'عيادة الدعم النفسي', description: 'لأن الحالة النفسية شريك أساسي في رحلة التوازن.' },
              { title: 'عيادة غدد وسكري الأطفال', description: 'رعاية متخصصة وحانية لأبطالنا الصغار.' },
              { title: 'عيادة القدم السكري', description: 'عناية فائقة لحماية قدميك والحفاظ على حركتك.' },
              { title: 'التثقيف الصحي', description: 'المعرفة هي قوتك، ونحن نزودك بها لتكون قائد رحلتك الصحية.' }
            ]
          },
          {
            title: 'البرامج الخاصة بالمركز',
            description: '',
            items: [
              { title: 'برنامج إدارة السمنة', description: 'رحلة تحول شاملة تتضمن الدعم الطبي، الغذائي، والنفسي.' },
              { title: 'برنامج توازن الهرمونات', description: 'لاستعادة نشاطك وحيويتك من خلال ضبط هرموناتك.' },
              { title: 'برنامج ضبط السكري', description: 'سيطرة أفضل، مضاعفات أقل، وحياة أكثر حرية.' }
            ]
          },
          {
            title: 'ختام تحفيزي',
            description: 'قد تبدو الرحلة طويلة، لكن كل رحلة عظيمة تبدأ بخطوة واحدة. الخطوة الأولى هي قرارك باستعادة صحتك. ونحن هنا لنكون معك في كل خطوة تالية. احجز استشارتك اليوم، ودعنا نبدأ معاً كتابة فصل جديد من التوازن في قصة حياتك.',
            items: []
          }
        ]
      },
      iv: {
        metaTitle: 'وحدة العلاج الوريدي والفيتامينات | V Clinic',
        metaDescription:
          'جلسات وريدية للطاقة، المناعة، الجمال، الرياضيين، والترطيب مع بروتوكولات أمان واضحة.',
        intro:
          'في خضم حياتنا السريعة، غالباً ما نشعر بأن طاقتنا قد استُنزفت، وأن أجسادنا تطلب قسطاً من التجديد. وحدة العلاج الوريدي في V Clinic هي واحتك لاستعادة الحيوية من الداخل. نحن لا نقدم مجرد فيتامينات، بل نقدم لك "دفعة حياة" مصممة خصيصاً لتلبية احتياجات جسدك الفريدة. في جو هادئ ومريح، يمكنك الاسترخاء بينما نقوم بتغذية خلاياك مباشرة، لتشعر بتأثير فوري من النشاط والصفاء.',
        sections: [
          {
            title: 'الخدمات (باقات مصممة خصيصاً)',
            description: '',
            items: [
              { title: 'باقة الطاقة', description: 'عندما تحتاج إلى دفعة قوية لمواجهة أعباء الأسبوع.' },
              { title: 'باقة المناعة', description: 'درعك الواقي لتقوية دفاعات الجسم الطبيعية.' },
              { title: 'باقة الجمال', description: 'لإشراقة البشرة ونضارتها من الأعماق.' },
              { title: 'باقة الرياضيين', description: 'لدعم الأداء العضلي وتسريع الاستشفاء.' },
              { title: 'باقة الترطيب', description: 'لإعادة توازن السوائل في الجسم بعد يوم مرهق.' }
            ]
          },
          {
            title: 'ختام',
            description: 'امنح نفسك ساعة من الهدوء والتجديد. جسدك يستحق أن يشعر بالامتلاء والقوة، وروحك تستحق لحظات من الصفاء. احجز جلستك اليوم، واشعر بالفرق الذي يمكن أن تحدثه دفعة واحدة من العافية المركزة.',
            items: []
          }
        ]
      },
      consultations: {
        metaTitle: 'العيادات الاستشارية | V Clinic',
        metaDescription: 'استشارات تخصصية تشمل أمراض القلب، الرئة، الكلى، الدم، المناعة، الألم، الأعصاب، الروماتيزم، المسالك، والجهاز الهضمي.',
        intro:
          'عندما تتطلب حالتك الصحية نظرة أكثر تخصصاً وعمقاً، تكون عياداتنا الاستشارية هي وجهتك. هنا، يجتمع نخبة من الأطباء الاستشاريين الذين كرسوا حياتهم المهنية لفهم أدق تفاصيل تخصصاتهم. نؤمن بأن الحالات المعقدة تحتاج إلى حوار هادئ، وتحليل دقيق، وخبرة لا تضاهى.',
        sections: [
          {
            title: 'عيادة القلب (Cardiology)',
            description: 'قلبك هو إيقاع حياتك، ومهمتنا هي الحفاظ على هذا الإيقاع منتظماً وقوياً. نستقبلك في عيادة القلب لنصغي إلى نبضات قلبك وقصتك، ونقدم لك الرعاية التي تحمي محرك حياتك.',
            items: []
          },
          {
            title: 'عيادة الصدرية (Pulmonology)',
            description: 'كل نفس هو شهادة على الحياة. في عيادة الصدرية، نساعدك على التنفس بعمق وحرية مرة أخرى. سواء كنت تعاني من حساسية موسمية أو حالة مزمنة، نحن هنا لنعيد الهواء النقي إلى رئتيك.',
            items: []
          },
          {
            title: 'عيادة الكلى (Nephrology)',
            description: 'الكلى هي مصفاة جسدك الصامتة. في عيادتنا، نوليها الاهتمام الذي تستحقه، ونعمل معك للحفاظ على وظائفها الحيوية وحمايتها من أي خطر. صحة كليتيك هي مفتاح توازنك الداخلي.',
            items: []
          },
          {
            title: 'عيادة الدم (Hematology)',
            description: 'الدم هو نهر الحياة الذي يجري في عروقك. في عيادة أمراض الدم، نحلل كل قطرة لنفهم قصتها، ونعالج أي خلل قد يؤثر على حيويتك وقوتك. صحتك تكمن في قوة دمك.',
            items: []
          },
          {
            title: 'عيادة المناعة (Immunology)',
            description: 'جهازك المناعي هو جيشك الخفي. في عيادة المناعة، نعزز قوة هذا الجيش وندربه ليدافع عنك بكفاءة. سواء كنت تعاني من حساسية أو مرض مناعي، نحن هنا لنعيد التوازن إلى نظامك الدفاعي.',
            items: []
          },
          {
            title: 'عيادة الألم (Pain Management)',
            description: 'الألم ليس مجرد عرض، بل هو قصة يرويها جسدك. في عيادة الألم، نصغي لهذه القصة بعمق، ونستخدم أحدث الأساليب العلاجية لنحررك من الألم ونعيد لك القدرة على الاستمتاع بحياتك.',
            items: []
          },
          {
            title: 'عيادة الأعصاب (Neurology)',
            description: 'جهازك العصبي هو شبكة التواصل التي تربط كل جزء فيك. في عيادة الأعصاب، نتعامل مع أكثر الأنظمة تعقيداً في جسمك، لنحل مشاكله ونحافظ على سلامة اتصالاتك الداخلية.',
            items: []
          },
          {
            title: 'عيادة الروماتيزم (Rheumatology)',
            description: 'آلام المفاصل والعضلات يمكن أن تسرق منك متعة الحركة. في عيادة الروماتيزم، نعمل على تخفيف التهاباتك، وتحسين حركتك، وإعادة المرونة إلى حياتك اليومية.',
            items: []
          },
          {
            title: 'عيادة المسالك البولية (Urology)',
            description: 'صحة المسالك البولية جزء أساسي من راحتك اليومية. في عيادتنا، نقدم حلولاً فعالة وحساسة لمشاكلك، مع الحفاظ على خصوصيتك وكرامتك في كل خطوة.',
            items: []
          },
          {
            title: 'عيادة الكبد والجهاز الهضمي (Hepatology & Gastroenterology)',
            description: 'راحتك تبدأ من الداخل. في عيادة الجهاز الهضمي، نهتم بصحة محرك الهضم لديك، من المريء إلى الأمعاء، لنضمن أن جسدك يحصل على أفضل تغذية ويعمل بانسجام.',
            items: []
          },
          {
            title: 'ختام إنساني',
            description: 'لكل تخصص دقيق، لدينا خبير يمتلك الشغف والمعرفة لمساعدتك. لا تدع حالتك الصحية المعقدة تمنعك من عيش حياة كاملة. احجز استشارتك اليوم، ودع خبراءنا يرشدونك نحو الشفاء.',
            items: []
          }
        ]
      },
      programs: {
        metaTitle: 'البرامج الصحية | V Clinic',
        metaDescription:
          'برامج متكاملة للأطفال، الحمل، صحة المرأة، كبار السن، الأمراض المزمنة، وإدارة الوزن.',
        intro:
          'نؤمن في V Clinic بأن الوقاية هي أسمى أشكال الرعاية. برامجنا الصحية ليست مجرد خدمات، بل هي رحلات مصممة بعناية لتناسب احتياجاتك في كل مرحلة من مراحل حياتك. كل برنامج هو عبارة عن خارطة طريق نحو صحة أفضل، نكون فيها دليلك وشريكك.',
        sections: [
          {
            title: 'برنامج الطفل',
            description: 'طفلك هو بذرة اليوم، وشجرة الغد. هذا البرنامج هو الماء والضوء الذي يرعى هذه البذرة لتنمو قوية ومزدهرة. نحن نسير بجانبك في كل خطوة من خطوات نمو طفلك، من ابتسامته الأولى إلى خطواته الواثقة، لنضمن له بداية صحية وسليمة.',
            items: [
              { title: 'زيارات دورية لمتابعة النمو', description: 'نراقب الوزن والطول ومؤشرات التطور.' },
              { title: 'جدول تطعيمات متكامل', description: 'نحمي طفلك من الأمراض بجدول دقيق.' },
              { title: 'استشارات تغذية وسلوك', description: 'نقدم الدعم لبناء عادات صحية.' },
              { title: 'فحوصات وقائية', description: 'نكتشف أي مشكلة محتملة في وقت مبكر.' }
            ]
          },
          {
            title: 'برنامج متابعة الحمل',
            description: 'تسعة أشهر من الانتظار، والأمل، والتغير. هذا البرنامج هو اليد الحانية التي ترافقك في أروع رحلة في حياتك. نحن هنا لنوفر لك الطمأنينة والرعاية، لنضمن أن تكون هذه الفترة مليئة بالصحة والسعادة لك ولجنينك.',
            items: [
              { title: 'زيارات متابعة منتظمة', description: 'نتابع صحتك وصحة جنينك خطوة بخطوة.' },
              { title: 'فحوصات بالموجات فوق الصوتية', description: 'نمنحك فرصة رؤية طفلك ينمو.' },
              { title: 'تحاليل وفحوصات ضرورية', description: 'نراقب كل المؤشرات الحيوية.' },
              { title: 'دعم نفسي وتثقيفي', description: 'نجهزك للحظة الولادة وما بعدها.' }
            ]
          },
          {
            title: 'برنامج المرأة',
            description: 'لأنك قلب الأسرة والمجتمع، صحتك هي أولويتنا القصوى. هذا البرنامج هو رسالة حب وتقدير لك، لتعيشي كل مراحل حياتك بقوة وثقة. إنه دعوة لتضعي صحتك أولاً، وتتذكري دائماً أنك تستحقين الأفضل.',
            items: [
              { title: 'فحص دوري شامل', description: 'نقيم صحتك العامة ونحدد أي احتياجات خاصة.' },
              { title: 'الكشف المبكر عن السرطان', description: 'فحص الثدي وعنق الرحم بانتظام.' },
              { title: 'استشارات تنظيم الأسرة', description: 'نساعدك على التخطيط لمستقبلك بثقة.' },
              { title: 'إدارة مرحلة انقطاع الطمث', description: 'ندعمك لتتجاوزي هذه المرحلة بحيوية.' }
            ]
          },
          {
            title: 'برنامج كبار السن',
            description: 'سنوات الخبرة والحكمة تستحق أن تُعاش بصحة وحيوية. هذا البرنامج هو تقديرنا لجيل العطاء، وهو مصمم ليضمن لكم سنوات ذهبية مليئة بالنشاط والراحة.',
            items: [
              { title: 'تقييم صحي شامل ومنتظم', description: 'نراقب صحتكم عن كثب ونكتشف التغيرات مبكراً.' },
              { title: 'إدارة الأمراض المزمنة', description: 'نساعدكم على التحكم في أمراضكم.' },
              { title: 'مراجعة الأدوية', description: 'نضمن أن أدويتكم آمنة وفعالة.' },
              { title: 'نصائح للحفاظ على الذاكرة', description: 'نقدم استراتيجيات لشيخوخة صحية ونشطة.' }
            ]
          },
          {
            title: 'برنامج الأمراض المزمنة',
            description: 'التعايش مع مرض مزمن ليس نهاية الطريق، بل هو بداية لرحلة جديدة من الوعي والتحكم. هذا البرنامج هو شريكك في هذه الرحلة، يمنحك القوة والأدوات اللازمة لإدارة حالتك بفعالية، لتعيش حياة كاملة وذات جودة عالية رغم التحديات.',
            items: [
              { title: 'خطة علاج ومتابعة شخصية', description: 'نصمم لك خطة فريدة تناسب حالتك.' },
              { title: 'تثقيف صحي مستمر', description: 'نزودك بالمعرفة لتفهم مرضك.' },
              { title: 'دعم غذائي ونفسي', description: 'نؤمن بأن الشفاء يتطلب رعاية متكاملة.' },
              { title: 'مراقبة دورية للمؤشرات', description: 'نبقى على اطلاع لنمنع أي تدهور.' }
            ]
          },
          {
            title: 'برنامج إدارة السمنة',
            description: 'رحلة إنقاص الوزن ليست مجرد أرقام على الميزان، بل هي رحلة لاستعادة الثقة، والطاقة، وحب الذات. هذا البرنامج ليس حمية قاسية، بل هو نظام حياة جديد ومستدام. نحن هنا لنرشدك، وندعمك، ونحتفل معك بكل كيلوجرام تفقده.',
            items: [
              { title: 'تقييم شامل', description: 'نفهم أسباب زيادة وزنك لنضع خطة مخصصة.' },
              { title: 'خطة غذائية متوازنة', description: 'نصمم لك نظاماً غذائياً صحياً ولذيذاً.' },
              { title: 'برنامج رياضي تدريجي', description: 'نساعدك على إدخال الحركة بشكل ممتع.' },
              { title: 'دعم نفسي وسلوكي', description: 'نساعدك على بناء علاقة صحية مع الطعام.' }
            ]
          }
        ]
      },
      telemedicine: {
        metaTitle: 'الطب الاتصالي عن بعد | V Clinic',
        metaDescription:
          'استشارات فيديو آمنة، وصفات إلكترونية، وخطط متابعة متكاملة من المنزل.',
        intro:
          'في عالم لا يتوقف عن الحركة، يجب أن تكون الرعاية الصحية مواكبة لسرعة حياتك. خدمة الطب الاتصالي في V Clinic هي جسرك الرقمي نحو خبرائنا، حيث نلغي المسافات والحواجز لنكون معك أينما كنت. لم تعد بحاجة لتأجيل استشارة مهمة أو القلق بشأن الحصول على رأي طبي سريع. بضغطة زر، يمكنك التحدث مع طبيبك وجهاً لوجه، والحصول على التشخيص والمشورة وأنت في راحة منزلك.',
        sections: [
          {
            title: 'خطوات الخدمة',
            description: '',
            items: [
              { title: 'احجز استشارتك عبر الإنترنت', description: 'اختر الطبيب والتوقيت المناسب لك من خلال تطبيقنا أو موقعنا الإلكتروني.' },
              { title: 'تلقّ رابط الجلسة', description: 'سيصلك رابط آمن ومباشر لجلسة الفيديو الخاصة بك.' },
              { title: 'تحدث مع طبيبك', description: 'في الموعد المحدد، انضم إلى الجلسة وتحدث مع طبيبك بكل خصوصية وسهولة.' },
              { title: 'احصل على خطتك العلاجية', description: 'بعد الاستشارة، ستجد تقريرك الطبي والوصفات الطبية في ملفك الشخصي.' }
            ]
          },
          {
            title: 'المزايا',
            description: '',
            items: [
              { title: 'الراحة', description: 'استشارة من أي مكان، دون عناء التنقل والانتظار.' },
              { title: 'السرعة', description: 'وصول فوري إلى الرأي الطبي عند الحاجة.' },
              { title: 'الخصوصية', description: 'منصة آمنة وموثوقة تضمن سرية معلوماتك.' },
              { title: 'الفعالية', description: 'مثالية للمتابعات، الاستشارات السريعة، والأمراض غير الطارئة.' }
            ]
          },
          {
            title: 'ختام',
            description: 'لا تدع انشغالك أو بعد المسافة يؤثر على صحتك. صحتك تستحق الاهتمام الفوري. جرب خدمة الطب الاتصالي اليوم، واكتشف كيف يمكن للتكنولوجيا أن تجعل حياتك الصحية أبسط وأفضل.',
            items: []
          }
        ]
      },
      patientJourney: {
        metaTitle: 'تجربة المريض | V Clinic',
        metaDescription: 'تعرّف على خطوات الرحلة من الحجز وحتى التقييم بعد الزيارة مع أدوات المتابعة الرقمية.',
        intro:
          'في V Clinic، رحلتك معنا لا تبدأ عند باب الطبيب ولا تنتهي عند الصيدلية. إنها تبدأ من اللحظة التي تفكر فيها بالبحث عن رعاية، وتمتد إلى ما بعد شفائك. نحن مهووسون بتفاصيل تجربتك، لأننا نؤمن بأن الشفاء ليس عملية طبية فحسب، بل هو شعور إنساني متكامل. من سهولة حجز الموعد، إلى الابتسامة التي تستقبلك، ومن دفء الحوار مع الطبيب، إلى وضوح الخطة العلاجية، وانتهاءً بالمتابعة التي تجعلك تشعر بأنك لست وحدك.',
        sections: [
          {
            title: 'اقتباسات واقعية (من مرضى حقيقيين)',
            description: '',
            items: [
              { title: '"شعرت بأنهم يسمعونني حقاً"', description: 'لم تكن مجرد استشارة لمدة 10 دقائق، بل كانت حواراً حقيقياً عن صحتي.' },
              { title: '"التطبيق سهل جداً"', description: 'تمكنت من حجز موعد ومتابعة نتائجي بنفسي. شعرت بالسيطرة.' },
              { title: '"الممرضة كانت لطيفة جداً"', description: 'جعلتني أشعر بالراحة والاسترخاء في وحدة العلاج الوريدي.' },
              { title: '"تواصلوا معي للاطمئنان"', description: 'بعد انتهاء العلاج، هذه اللفتة الصغيرة عنت لي الكثير.' }
            ]
          },
          {
            title: 'نموذج تقييم تجربة المريض',
            description: 'شارك تجربتك معنا من خلال تقييمك. كيف كانت تجربتك معنا اليوم؟ ما هو أكثر شيء أعجبك في زيارتك؟ هل هناك أي شيء يمكننا تحسينه لنجعل تجربتك القادمة أفضل؟',
            items: []
          },
          {
            title: 'ختام',
            description: 'قصتك تلهمنا كل يوم. كل قصة شفاء، وكل كلمة تقدير، وكل ملاحظة بناءة، هي الوقود الذي يدفعنا لنكون أفضل. نحن لا نسعى فقط لتقديم رعاية طبية ممتازة، بل نطمح لنكون جزءاً إيجابياً من قصة حياتك. شاركنا تجربتك، فصوتك هو الذي يرسم ملامح مستقبل V Clinic.',
            items: []
          }
        ]
      },
      insurance: {
        metaTitle: 'التأمين الصحي | V Clinic',
        metaDescription: 'دليل استخدام التأمين الصحي في V Clinic مع قائمة الشركاء والخطوات الأساسية.',
        intro:
          'نحن نؤمن بأن الحصول على رعاية صحية عالية الجودة يجب أن يكون سهلاً ومتاحاً للجميع. لهذا السبب، عقدنا شراكات مع مجموعة واسعة من شركات التأمين الصحي الرائدة، لنرفع عنك عبء القلق المالي، ونجعل تركيزك منصباً على ما هو أهم: صحتك. فريقنا المتخصص في شؤون التأمين موجود هنا لمساعدتك في فهم تغطيتك، والإجابة على استفساراتك، وتسهيل جميع الإجراءات الإدارية.',
        sections: [
          {
            title: 'قائمة الشركات',
            description: '',
            items: [
              { title: 'بوبا العربية' },
              { title: 'التعاونية للتأمين' },
              { title: 'ميدغلف' },
              { title: 'ملاذ للتأمين' },
              { title: 'الاتحاد التجاري (UCA)' },
              { title: 'غلوب مد' }
            ]
          },
          {
            title: 'خطوات الاستفادة',
            description: '',
            items: [
              { title: 'تحقق من تغطيتك', description: 'يمكنك التواصل معنا مسبقاً للتأكد من أن بطاقتك التأمينية معتمدة لدينا.' },
              { title: 'أحضر بطاقتك', description: 'عند زيارتك، كل ما تحتاجه هو بطاقة التأمين الخاصة بك وبطاقة الهوية.' },
              { title: 'دع الباقي لنا', description: 'سيقوم فريقنا بمعالجة الموافقات والطلبات مباشرة مع شركة التأمين الخاصة بك.' }
            ]
          },
          {
            title: 'ختام مطمئن',
            description: 'لا تدع الإجراءات الإدارية تكون عائقاً في طريق صحتك. نحن هنا لنجعل تجربتك بسيطة ومريحة من البداية إلى النهاية. استخدم تأمينك الصحي معنا بكل ثقة، ودعنا نعتني بك.',
            items: []
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
      { label: 'Obesity & Endocrine', href: '/en/obesity' },
      { label: 'IV Therapy', href: '/en/iv' },
      { label: 'Consulting Clinics', href: '/en/consultations' },
      { label: 'Programs', href: '/en/programs' },
      { label: 'Telemedicine', href: '/en/telemedicine' },
      { label: 'Patient Journey', href: '/en/patient-journey' },
      { label: 'Insurance', href: '/en/insurance' },
      { label: 'Blog', href: '/en/blog' },
      { label: 'App', href: '/en/app' },
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
        { title: 'Malath' },
        { title: 'UCA' },
        { title: 'GlobeMed' }
      ]
    },
    footer: {
      mission:
        'Delivering bilingual, evidence-based healthcare with a warm human touch across every web and mobile interaction.',
      contact: {
        phone: '9200XXXXX',
        whatsapp: '+966-55-000-0000',
        address: 'Jeddah, Saudi Arabia',
        hours: 'Sat-Thu: 9am - 9pm'
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
      obgyn: {
        metaTitle: 'Obstetrics & Gynecology | V Clinic',
        metaDescription: 'Comprehensive women health services including prenatal care, delivery, and gynecological treatments.',
        intro:
          'Specialized care for women at every stage of life with experienced physicians and modern facilities.',
        sections: [
          {
            title: 'OB-GYN Services',
            description: '',
            items: [
              { title: 'Prenatal Care', description: 'Comprehensive pregnancy monitoring and care.' },
              { title: 'Natural Delivery', description: 'Safe and comfortable natural birth experiences.' },
              { title: 'Cesarean Delivery', description: 'Expert surgical care when medically indicated.' },
              { title: 'Gynecological Treatments', description: 'Treatment for various women health conditions.' },
              { title: 'Reproductive Health', description: 'Family planning and fertility services.' },
              { title: 'Postnatal Care', description: 'Comprehensive postpartum support and follow-up.' }
            ]
          }
        ]
      },
      dermatology: {
        metaTitle: 'Dermatology & Aesthetics | V Clinic',
        metaDescription: 'Advanced skin care, dermatological treatments, and non-surgical aesthetic procedures.',
        intro:
          'Evidence-based dermatology combined with modern aesthetic solutions for your skin health and beauty.',
        sections: [
          {
            title: 'Dermatology Services',
            description: '',
            items: [
              { title: 'Medical Dermatology', description: 'Treatment of skin conditions and diseases.' },
              { title: 'Aesthetic Procedures', description: 'Non-surgical cosmetic enhancements.' },
              { title: 'Laser Treatments', description: 'Advanced laser therapy for various skin concerns.' },
              { title: 'Skin Rejuvenation', description: 'Anti-aging and skin renewal treatments.' },
              { title: 'Hair Treatments', description: 'Solutions for hair loss and scalp conditions.' },
              { title: 'Cosmetic Injectables', description: 'Botox, fillers, and other injectable treatments.' }
            ]
          }
        ]
      },
      emergency: {
        metaTitle: 'Emergency Department | V Clinic',
        metaDescription: '24/7 emergency medical services with a multi-disciplinary team ready to respond.',
        intro:
          'Immediate medical attention available round the clock with experienced emergency physicians and support staff.',
        sections: [
          {
            title: 'Emergency Services',
            description: '',
            items: [
              { title: '24/7 Availability', description: 'Emergency care available at all times.' },
              { title: 'Rapid Assessment', description: 'Quick triage and evaluation of urgent cases.' },
              { title: 'Multi-Disciplinary Team', description: 'Specialists on call for comprehensive care.' },
              { title: 'Advanced Equipment', description: 'Modern diagnostic and treatment facilities.' },
              { title: 'Stabilization Care', description: 'Immediate stabilization of critical cases.' },
              { title: 'Coordination', description: 'Seamless coordination with specialized departments.' }
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
