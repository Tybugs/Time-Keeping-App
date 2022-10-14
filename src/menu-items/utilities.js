// assets
import { IconBrandFramer, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd, IconClock, IconUser, IconWallet, IconSpeakerphone, IconFileAnalytics  } from '@tabler/icons';

// constant
const icons = {
    IconTypography: IconTypography,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconWindmill: IconWindmill,
    IconBrandFramer: IconBrandFramer,
    IconLayoutGridAdd: IconLayoutGridAdd,
    IconClock: IconClock,
    IconUser: IconUser,
    IconWallet: IconWallet,
    IconSpeakerphone: IconSpeakerphone,
    IconFileAnalytics: IconFileAnalytics
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const utilities = {
    id: 'utilities',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Profile',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons['IconUser'],
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Time Record',
            type: 'item',
            url: '/utils/util-color',
            icon: icons['IconClock'],
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Evaluations',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons['IconFileAnalytics'],
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Transactions',
            type: 'collapse',
            icon: icons['IconSpeakerphone'],
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Payslip',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    icon: icons['IconWallet'],
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Leave',
                    type: 'item',
                    url: '/icons/material-icons',
                    icon: icons['IconFileAnalytics'],
                    breadcrumbs: false
                }
            ]
        }
    ]
};
