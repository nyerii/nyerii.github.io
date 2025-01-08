import React, { useEffect } from 'react';

const BrevoConversationsWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';

        script.onload = () => {
            window.BrevoConversationsID = process.env.REACT_APP_BREVO_CONVERSATIONS_API_KEY;
            window.BrevoConversations = window.BrevoConversations || function() {
                (window.BrevoConversations.q = window.BrevoConversations.q || []).push(arguments);
            };
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default BrevoConversationsWidget;
