/**
 * i18n dictionary for the Astro landing site.
 * The lang is inferred from Astro.url.pathname — anything under /en/ is English,
 * everything else is Russian. The Header has a switcher that preserves path.
 */

export type Lang = 'ru' | 'en';

export function detectLang(pathname: string): Lang {
  return pathname.startsWith('/en') ? 'en' : 'ru';
}

type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    features: string;
    steps: string;
    cardTypes: string;
    pricing: string;
    faq: string;
    blog: string;
    signin: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_signin: string;
    cta_create: string;
    byline: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; body: string }[];
  };
  steps: {
    title: string;
    subtitle: string;
    items: { n: string; title: string; body: string }[];
  };
  cardTypes: {
    title: string;
    subtitle: string;
    items: { name: string; desc: string }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: {
      name: string;
      price: string;
      period: string;
      description: string;
      features: string[];
      cta: string;
      highlight: boolean;
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    tagline: string;
    product: string;
    product_features: string;
    product_pricing: string;
    product_changelog: string;
    product_status: string;
    resources: string;
    resources_docs: string;
    resources_blog: string;
    resources_api: string;
    resources_selfhost: string;
    legal: string;
    legal_terms: string;
    legal_privacy: string;
    legal_cookies: string;
    legal_refunds: string;
    copyright: string;
  };
  blog: {
    title: string;
    intro: string;
    readMore: string;
    backToBlog: string;
    welcome: {
      title: string;
      lead: string;
      h_why: string;
      why_p1: string;
      why_p2: string;
      h_next: string;
      next_p1: string;
      posts: { slug: string; date: string; title: string; excerpt: string }[];
    };
  };
  legal: {
    lastUpdated: string;
    placeholder: string;
  };
};

const ru: Dict = {
  meta: {
    title: 'Threadline — визуальная карта твоих идей',
    description: 'Личный визуальный воркспейс: борды, типизированные карточки, шаринг, агентское API и ИИ-ассистент.',
  },
  nav: {
    features: 'Фичи',
    steps: 'Как начать',
    cardTypes: 'Типы карточек',
    pricing: 'Тарифы',
    faq: 'Вопросы',
    blog: 'Блог',
    signin: 'Войти',
    getStarted: 'Начать',
  },
  hero: {
    title: 'Boards, not bookmarks.',
    subtitle: 'Threadline — приватный визуальный воркспейс, где ты собираешь, связываешь и формулируешь идеи. Без потерь в длинном списке вкладок.',
    cta_signin: 'Войти',
    cta_create: 'Создать воркспейс',
    byline: 'Без кредитки. Без триалов. Без follow-up писем.',
  },
  features: {
    title: 'Что внутри',
    subtitle: 'Шесть вещей, ради которых стоит открыть Threadline.',
    items: [
      { title: 'Бесконечный холст', body: 'Промты, HTML, картинки, видео, голосовые и todo — на одном борде. Связи между ними как в Miro, но быстрее и в одном месте.' },
      { title: 'ИИ-транскрипция', body: 'Записал голос → получил текст. Провайдер и модель настраиваются: OpenAI, OpenRouter, кастомный prompt словаря.' },
      { title: 'API для твоих агентов', body: 'Granular-токены, scope по разделам, dev-link в один клик. Агент работает от твоего имени, не от root.' },
      { title: 'Шаринг по ссылке', body: 'Public / authenticated доступ к борду. Передал токен — клиент смотрит только то, что ты открыл.' },
      { title: 'S3-совместимое хранилище', body: 'Оригиналы файлов, превью через LibreOffice. Экспорт борда одним ZIP — JSON + media.' },
      { title: 'OAuth + email/пароль', body: 'Google, Яндекс или email. Hard delete аккаунта, экспорт всех данных, никаких ловушек.' },
    ],
  },
  steps: {
    title: 'Три шага, без настройки',
    subtitle: 'Начни с пустого борда или со стартового шаблона — твой выбор.',
    items: [
      { n: '01', title: 'Создай борд', body: 'Один клик в сайдбаре. Цвет, фон, имя — что угодно. Бордов может быть сколько угодно.' },
      { n: '02', title: 'Накидывай карточки', body: 'P / T / H / I — четыре горячие клавиши и у тебя prompt, text, html или image. Голосовые добавляются drag-and-drop.' },
      { n: '03', title: 'Связывай и шаринг', body: 'Тяни линии между карточками. Подключай своего агента через API. Шарь борд по ссылке.' },
    ],
  },
  cardTypes: {
    title: 'Восемь типов карточек',
    subtitle: 'Каждый — настоящая карточка, не обрезанное текстовое поле.',
    items: [
      { name: 'Промт', desc: 'Идея → текст' },
      { name: 'Текст', desc: 'Заметка' },
      { name: 'Картинка', desc: 'Генерация/загрузка' },
      { name: 'Видео', desc: 'Превью+исходник' },
      { name: 'HTML', desc: 'Песочница' },
      { name: 'Голос', desc: 'Аудио+транскрипт' },
      { name: 'PDF/PPTX', desc: 'С превью' },
      { name: 'Свои типы', desc: 'Расширяемо' },
    ],
  },
  pricing: {
    title: 'Просто, без сюрпризов',
    subtitle: 'Бесплатно для соло. Standard для работы. Pro для продакшна.',
    plans: [
      {
        name: 'Бесплатный',
        price: '0',
        period: 'навсегда',
        description: 'Чтобы попробовать и понять, нужно ли тебе это вообще.',
        features: ['2 борда', '1 ГБ хранилища', 'Базовые типы карточек', 'Шаринг по ссылке'],
        cta: 'Начать бесплатно',
        highlight: false,
      },
      {
        name: 'Standard',
        price: '8',
        period: 'в месяц',
        description: 'Для тех, кто работает с Threadline каждый день.',
        features: ['20 бордов', '20 ГБ хранилища', 'Все типы карточек', 'Агентские токены', 'Email-поддержка'],
        cta: 'Выбрать Standard',
        highlight: true,
      },
      {
        name: 'Pro',
        price: '24',
        period: 'в месяц',
        description: 'Для команд и тех, кто строит на Threadline.',
        features: ['Безлимит бордов', '200 ГБ хранилища', 'Все типы + ранний доступ', 'Приоритетная поддержка', 'Custom-интеграции'],
        cta: 'Выбрать Pro',
        highlight: false,
      },
    ],
  },
  faq: {
    title: 'Вопросы',
    subtitle: 'Если твоего вопроса тут нет — напиши нам.',
    items: [
      { q: 'Где хранятся мои данные?', a: 'В нашей PostgreSQL-базе во Франкфурте. Файлы — на Hostkey S3. В любой момент можно выгрузить всё ZIP-ом.' },
      { q: 'Вы тренируете ИИ на моих бордах?', a: 'Нет. ИИ опционально, по своему ключу, и никогда не сохраняется в аккаунт. Борды не используются для обучения моделей.' },
      { q: 'Можно ли развернуть Threadline у себя?', a: 'Пока нет — но приложение умещается в один docker-compose. Self-host образ в roadmap.' },
      { q: 'Что такое агентские токены?', a: 'Токен с конкретными scope (read boards, write cards, export…). Агент действует от твоего имени, не видя пароля.' },
      { q: 'Как работают возвраты?', a: 'Отмена в любой момент. Пропорциональный возврат в течение 14 дней — см. страницу «Возвраты».' },
      { q: 'Есть ли мобильное приложение?', a: 'Пока нет. Web-приложение работает в любом современном мобильном браузере; iOS-приложение в long-term roadmap.' },
    ],
  },
  finalCta: {
    title: 'Готов попробовать Threadline?',
    subtitle: 'Без кредитки. Без триалов. Без follow-up писем.',
    button: 'Начать',
  },
  footer: {
    tagline: 'Boards, not bookmarks.',
    product: 'Продукт',
    product_features: 'Фичи',
    product_pricing: 'Тарифы',
    product_changelog: 'Что нового',
    product_status: 'Статус',
    resources: 'Ресурсы',
    resources_docs: 'Документация',
    resources_blog: 'Блог',
    resources_api: 'API',
    resources_selfhost: 'Self-host',
    legal: 'Юридическое',
    legal_terms: 'Условия',
    legal_privacy: 'Приватность',
    legal_cookies: 'Куки',
    legal_refunds: 'Возвраты',
    copyright: '© 2026 Threadline. Все права защищены.',
  },
  blog: {
    title: 'Блог',
    intro: 'Мы пишем про продукт, решения и roadmap.',
    readMore: 'Читать дальше',
    backToBlog: '← Назад в блог',
    welcome: {
      title: 'Добро пожаловать в Threadline',
      lead: 'Threadline — это визуальный workspace, в котором мы сводим всё, что ты делаешь с ИИ: промты, HTML-артефакты, изображения, голосовые заметки, видео. В одном месте, со связями, с шарингом, с API для твоих собственных агентов.',
      h_why: 'Зачем это нужно',
      why_p1: 'Работа с ИИ сегодня — это десяток разрозненных инструментов. Промт ты пишешь в одном месте, картинку генеришь в другом, голос записываешь в третьем, а прототип собираешь где-то ещё. Threadline объединяет их в один борд.',
      why_p2: 'Идея простая: борд — это узлы (карточки разных типов) и связи между ними. Каждый узел — это артефакт: промт, текст, HTML, картинка, видео, голос, PDF, PPTX. Связи — это то, как они сочетаются.',
      h_next: 'Что дальше',
      next_p1: 'Мы только в начале. В планах: автоимпорт из Notion, больше типов карточек, расширенные агенты, плагины, коммерческие тарифы с командами.',
      posts: [
        { slug: 'welcome', date: '2026-06-01', title: 'Добро пожаловать в Threadline', excerpt: 'Почему мы строим визуальный workspace именно для работы с ИИ-артефактами, а не очередной Notion.' },
        { slug: 'agent-api', date: '2026-06-10', title: 'API для ИИ-агентов: как выдавать granular-токены', excerpt: 'Разбираем паттерн scope-based авторизации на примере Threadline.' },
      ],
    },
  },
  legal: {
    lastUpdated: 'Последнее обновление:',
    placeholder: 'Документ в процессе. Свяжитесь с нами по правовым вопросам.',
  },
};

const en: Dict = {
  meta: {
    title: 'Threadline — a visual map for your ideas',
    description: 'A private visual workspace with boards, typed cards, sharing, an agent API and an AI assistant.',
  },
  nav: {
    features: 'Features',
    steps: 'Get started',
    cardTypes: 'Card types',
    pricing: 'Pricing',
    faq: 'FAQ',
    blog: 'Blog',
    signin: 'Sign in',
    getStarted: 'Get started',
  },
  hero: {
    title: 'Boards, not bookmarks.',
    subtitle: 'Threadline is a private visual workspace where you collect, connect and shape ideas — without losing them in a long list of browser tabs.',
    cta_signin: 'Sign in',
    cta_create: 'Create your workspace',
    byline: 'No credit card. No trials. No email follow-ups.',
  },
  features: {
    title: 'What is inside',
    subtitle: 'Six things worth opening Threadline for.',
    items: [
      { title: 'Infinite canvas', body: 'Prompts, HTML, images, video, voice memos and todos — on the same board. Connections between them like in Miro, just faster and in one place.' },
      { title: 'AI transcription', body: 'Record voice → get text. Provider and model are configurable: OpenAI, OpenRouter, custom dictionary prompt.' },
      { title: 'API for your agents', body: 'Granular tokens, scoped per section, dev-link in one click. The agent acts on your behalf, not as root.' },
      { title: 'Sharing by link', body: 'Public / authenticated access to a board. Hand over the token — the viewer sees only what you opened.' },
      { title: 'S3-compatible storage', body: 'Original files, previews via LibreOffice. Export a board as a single ZIP — JSON + media.' },
      { title: 'OAuth + email/password', body: 'Google, Yandex or email. Hard account delete, export of all data, no dark patterns.' },
    ],
  },
  steps: {
    title: 'Three steps, no setup',
    subtitle: 'Start empty or with a starter board — your call.',
    items: [
      { n: '01', title: 'Create a board', body: 'One click in the sidebar. Color, background, name — whatever you want. As many boards as you need.' },
      { n: '02', title: 'Drop cards in', body: 'P / T / H / I — four hotkeys and you have a prompt, text, html or image. Voice memos are added by drag-and-drop.' },
      { n: '03', title: 'Connect and share', body: 'Drag lines between cards. Connect your agent via the API. Share the board by link.' },
    ],
  },
  cardTypes: {
    title: 'Eight card types',
    subtitle: 'Each one is a real card, not a stripped-down text field.',
    items: [
      { name: 'Prompt', desc: 'Idea → text' },
      { name: 'Text', desc: 'Note' },
      { name: 'Image', desc: 'Generate / upload' },
      { name: 'Video', desc: 'Preview + source' },
      { name: 'HTML', desc: 'Sandbox' },
      { name: 'Voice', desc: 'Audio + transcript' },
      { name: 'PDF / PPTX', desc: 'With preview' },
      { name: 'Custom types', desc: 'Extensible' },
    ],
  },
  pricing: {
    title: 'Simple, no surprises',
    subtitle: 'Free for solo. Standard for working. Pro for shipping.',
    plans: [
      {
        name: 'Free',
        price: '0',
        period: 'forever',
        description: 'To try it and decide whether you actually need it.',
        features: ['2 boards', '1 GB storage', 'Basic card types', 'Share by link'],
        cta: 'Start free',
        highlight: false,
      },
      {
        name: 'Standard',
        price: '8',
        period: 'per month',
        description: 'For those who work with Threadline every day.',
        features: ['20 boards', '20 GB storage', 'All card types', 'Agent tokens', 'Email support'],
        cta: 'Choose Standard',
        highlight: true,
      },
      {
        name: 'Pro',
        price: '24',
        period: 'per month',
        description: 'For teams and for those building on Threadline.',
        features: ['Unlimited boards', '200 GB storage', 'All types + early access', 'Priority support', 'Custom integrations'],
        cta: 'Choose Pro',
        highlight: false,
      },
    ],
  },
  faq: {
    title: 'Questions',
    subtitle: "If your question isn't here, ping us.",
    items: [
      { q: 'Where is my data stored?', a: 'On our PostgreSQL database in Frankfurt. Files live on Hostkey S3. You can export everything as a ZIP at any time.' },
      { q: 'Do you train AI on my boards?', a: "No. AI is opt-in, byo-key, and never persisted to your account. Your boards are not used to train any model." },
      { q: 'Can I self-host Threadline?', a: 'Not yet — but the app fits in a single docker-compose. A self-host image is on the roadmap.' },
      { q: "What's the deal with agent tokens?", a: 'Issue a token with the scopes you need (read boards, write cards, export…). An agent acts on your behalf without ever seeing your password.' },
      { q: 'How do refunds work?', a: 'Cancel any time. Pro-rated refund within 14 days — see the Refunds page.' },
      { q: 'Is there a mobile app?', a: 'Not yet. The web app works in any modern mobile browser; an iOS app is on the long-term roadmap.' },
    ],
  },
  finalCta: {
    title: 'Ready to try Threadline?',
    subtitle: 'No credit card. No trials. No email follow-ups.',
    button: 'Get started',
  },
  footer: {
    tagline: 'Boards, not bookmarks.',
    product: 'Product',
    product_features: 'Features',
    product_pricing: 'Pricing',
    product_changelog: 'Changelog',
    product_status: 'Status',
    resources: 'Resources',
    resources_docs: 'Docs',
    resources_blog: 'Blog',
    resources_api: 'API',
    resources_selfhost: 'Self-host',
    legal: 'Legal',
    legal_terms: 'Terms',
    legal_privacy: 'Privacy',
    legal_cookies: 'Cookies',
    legal_refunds: 'Refunds',
    copyright: '© 2026 Threadline. All rights reserved.',
  },
  blog: {
    title: 'Blog',
    intro: 'We write about the product, the decisions and the roadmap.',
    readMore: 'Read more',
    backToBlog: '← Back to blog',
    welcome: {
      title: 'Welcome to Threadline',
      lead: 'Threadline is a visual workspace that brings together everything you do with AI: prompts, HTML artefacts, images, voice memos, videos. In one place, with connections, with sharing, with an API for your own agents.',
      h_why: 'Why this is needed',
      why_p1: 'Working with AI today means juggling a dozen disconnected tools. You write a prompt in one place, generate an image in another, record a voice memo in a third, and assemble a prototype somewhere else. Threadline brings them all onto one board.',
      why_p2: 'The idea is simple: a board is nodes (typed cards) and connections between them. Each node is an artefact: a prompt, text, HTML, image, video, voice, PDF, PPTX. The connections are how they combine.',
      h_next: "What's next",
      next_p1: "We're just getting started. On the roadmap: auto-import from Notion, more card types, extended agent capabilities, plugins, commercial team plans.",
      posts: [
        { slug: 'welcome', date: '2026-06-01', title: 'Welcome to Threadline', excerpt: 'Why we are building a visual workspace specifically for working with AI artefacts, not another Notion.' },
        { slug: 'agent-api', date: '2026-06-10', title: 'API for AI agents: how to issue granular tokens', excerpt: 'A look at scope-based authorization using Threadline as the example.' },
      ],
    },
  },
  legal: {
    lastUpdated: 'Last updated:',
    placeholder: 'Document in progress. Reach out for any legal questions.',
  },
};

const dicts: Record<Lang, Dict> = { ru, en };

export function getStrings(lang: Lang): Dict {
  return dicts[lang];
}
