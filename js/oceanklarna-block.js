
const oceanklarna_settings = window.wc.wcSettings.getSetting( 'oceanklarna_data', {} );


const oceanklarna_label = window.wp.htmlEntities.decodeEntities( oceanklarna_settings.title ) || window.wp.i18n.__( 'Oceanpayment Klarna Payment Gateway', 'oceanpayment-klarna-gateway' );




const oceanklarna_Content = () => {
    return window.wp.htmlEntities.decodeEntities( oceanklarna_settings.description || '' );
};


var I = function(e) {
    var t = e.components,
        n = e.title,
        r = e.icons,
        a = e.id;
    Array.isArray(r) || (r = [r]);
    var o = t.PaymentMethodLabel,
        i = t.PaymentMethodIcons;

    const style = {
        'align-items': 'center',
        'display': 'flex',
        'width': '100%'
    };

    return React.createElement("div", {
        className: "wc-oceanklarna-blocks-payment-method__label ".concat(a),
        style:style
    }, React.createElement(o, {
        text: n
    }), React.createElement(i, {
        icons: r
    }))
};
const Oceanklarna_Block_Gateway = {
    name: 'oceanklarna',

    label: React.createElement(I, {
        id: "oceanklarna",
        title: oceanklarna_settings.title,
        icons: oceanklarna_settings.icons
    }),

    content: Object( window.wp.element.createElement )( oceanklarna_Content, null ),
    edit: Object( window.wp.element.createElement )( oceanklarna_Content, null ),
    canMakePayment: () => true,
    ariaLabel: oceanklarna_label,
    // placeOrderButtonLabel: window.wp.i18n.__( 'Proceed to Oceanpayment', 'oceanpayment-klarna-gateway' ),

};

window.wc.wcBlocksRegistry.registerPaymentMethod( Oceanklarna_Block_Gateway );