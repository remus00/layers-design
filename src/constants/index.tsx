import acmeLogo from '@/assets/images/acme-corp.svg';
import apexLogo from '@/assets/images/apex.svg';
import celestialLogo from '@/assets/images/celestial.svg';
import echoValleyLogo from '@/assets/images/echo-valley.svg';
import outsideLogo from '@/assets/images/outside.svg';
import pulseLogo from '@/assets/images/pulse.svg';
import quantumLogo from '@/assets/images/quantum.svg';
import twiceLogo from '@/assets/images/twice.svg';

import figmaLogo from '@/assets/images/figma-logo.svg';
import framerLogo from '@/assets/images/framer-logo.svg';
import githubLogo from '@/assets/images/github-logo.svg';
import notionLogo from '@/assets/images/notion-logo.svg';
import relumeLogo from '@/assets/images/relume-logo.svg';
import slackLogo from '@/assets/images/slack-logo.svg';

export const logos = [
    { name: 'Quantum', image: quantumLogo },
    { name: 'Acme Corp', image: acmeLogo },
    { name: 'Echo Valley', image: echoValleyLogo },
    { name: 'Pulse', image: pulseLogo },
    { name: 'Outside', image: outsideLogo },
    { name: 'Apex', image: apexLogo },
    { name: 'Celestial', image: celestialLogo },
    { name: 'Twice', image: twiceLogo },
];

export const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'FAQs', href: '#faqs' },
];

export const introductionText = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export const featuresMap = [
    'Asset Library',
    'Code Preview',
    'Flow Mode',
    'Smart Sync',
    'Auto Layout',
    'Fast Search',
    'Smart Guides',
];

export const integrations = [
    {
        name: 'Figma',
        icon: figmaLogo,
        description: 'Figma is a collaborative interface design tool.',
    },
    {
        name: 'Notion',
        icon: notionLogo,
        description: 'Notion is an all-in-one workspace for notes and docs.',
    },
    {
        name: 'Slack',
        icon: slackLogo,
        description: 'Slack is a powerful team communication platform.',
    },
    {
        name: 'Relume',
        icon: relumeLogo,
        description: 'Relume is a no-code website builder and design system.',
    },
    {
        name: 'Framer',
        icon: framerLogo,
        description: 'Framer is a professional website prototyping tool.',
    },
    {
        name: 'GitHub',
        icon: githubLogo,
        description: 'GitHub is the leading platform for code collaboration.',
    },
];
