import '../css/app.css';
import './bootstrap';
import '/public/dist/css/tabler.min.css';
import '/public/dist/css/tabler-flags.min.css';
import '/public/dist/css/tabler-payments.min.css';
import '/public/dist/css/tabler-vendors.min.css';
import '/public/dist/css/demo.min.css';
import '/public/dist/js/demo-theme.min.js';
import '/public/dist/libs/apexcharts/dist/apexcharts.min.js';
import '/public/dist/libs/jsvectormap/dist/js/jsvectormap.min.js';
import '/public/dist/libs/jsvectormap/dist/maps/world.js';
import '/public/dist/libs/jsvectormap/dist/maps/world-merc.js';
// Tabler Core
import '/public/dist/js/tabler.min.js';
import '/public/dist/js/demo.min.js';
// import '/public/dist/js/custom.js';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/store';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <App {...props} />
            </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
