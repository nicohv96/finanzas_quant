//-------------------------------Widgets dinamicos-------------------------------
//Función para llenar el select con datos del JSON
function llenarSelect(symbols) {
    const select = document.getElementById('symbolSelect');
    symbols.forEach(symbol => {
        const option = document.createElement('option');
        option.value = symbol.symbol;
        option.text = symbol.name;
        select.appendChild(option);
    });
}

fetch('symbols.json')
    .then(response => response.json())
    .then(data => {
        llenarSelect(data);
    })
    .catch(error => console.error('Error al obtener el archivo JSON:', error));
//Fin de la creación del select dinamico

//Inicio de creación de Widgets
//Info de la empresa
function crearWidgetSymbolInfo(symbol) {
    const container = document.createElement('div');
    container.className = 'tradingview-widget-container';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container-widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
    script.innerHTML = JSON.stringify({
        "height": "100%",
        "width": "100%",
        "symbol": symbol,
        "locale": "es",
        "colorTheme": "dark",
        "isTransparent": false
    });

    container.appendChild(widget);
    container.appendChild(script);

    return container;
}

//Perfil de la empresa
function crearWidgetSymbolProfile(symbol) {
    const container = document.createElement('div');
    container.className = 'tradingview-widget-container';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container-widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js';
    script.innerHTML = JSON.stringify({
        "height": "400",
        "width": "100%",
        "symbol": symbol,
        "locale": "es",
        "colorTheme": "dark",
        "isTransparent": false
    });

    container.appendChild(widget);
    container.appendChild(script);

    return container;
}

//Analisis tecnico de la empresa (reloj)
function crearWidgetTechnicalAnalysis(symbol) {
    const container = document.createElement('div');
    container.className = 'tradingview-widget-container';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container-widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.innerHTML = JSON.stringify({
        "height": "400",
        "width": "60%",
        "symbol": symbol,
        "interval": "1m",
        "showIntervalTabs": true,
        "displayMode": "single",
        "locale": "es",
        "colorTheme": "dark",
        "isTransparent": false
    });

    container.appendChild(widget);
    container.appendChild(script);

    return container;
}

//Grafico de la empresa
function crearWidgetAdvancedChart(symbol) {
    const container = document.createElement('div');
    container.className = 'tradingview-widget-container';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container-widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.innerHTML = JSON.stringify({
        "height": "600",
        "width": "100%",
        "symbol": symbol,
        "interval": "D",
        "timezone": "America/Argentina/Buenos_Aires",
        "theme": "dark",
        "style": "1",
        "locale": "es",
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "calendar": true,
        "support_host": "https://www.tradingview.com"
    });

    container.appendChild(widget);
    container.appendChild(script);

    return container;
}

//Información fundamental de la empresa
function crearWidgetFundamentalData(symbol) {
    const container = document.createElement('div');
    container.className = 'tradingview-widget-container';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container-widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
    script.innerHTML = JSON.stringify({
        "height": "800",
        "width": "100%",
        "symbol": symbol,
        "locale": "es",
        "largeChartUrl": "",
        "displayMode": "regular",
        "colorTheme": "dark",
        "isTransparent": false
    });

    container.appendChild(widget);
    container.appendChild(script);

    return container;
}

//La funcion se describe sola xD
function actualizarWidgets(symbol) {
    const widgetsContainer = document.getElementById('tradingview-widgets');
    widgetsContainer.innerHTML = '';

    widgetsContainer.appendChild(crearWidgetSymbolInfo(symbol));
    widgetsContainer.appendChild(crearWidgetSymbolProfile(symbol));
    widgetsContainer.appendChild(crearWidgetTechnicalAnalysis(symbol));
    widgetsContainer.appendChild(crearWidgetAdvancedChart(symbol));
    widgetsContainer.appendChild(crearWidgetFundamentalData(symbol));
}

const symbolSelect = document.querySelector('#symbolSelect');
const updateWidgetsButton = document.querySelector('#updateWidgetsButton');
updateWidgetsButton.addEventListener('click', () => {
    const selectedSymbol = symbolSelect.value;
    if (selectedSymbol) {
        actualizarWidgets(selectedSymbol);
    } else {
        alert("Por favor, seleccione un símbolo.");
    }
});


document.addEventListener('DOMContentLoaded', function () {
    crearWidgetsStatics();
});

function crearWidgetsStatics() {
    const widgetsContainer = document.getElementById('tradingview-widgets-statics');
    widgetsContainer.innerHTML = '';

    widgetsContainer.appendChild(crearWidgetTopStories());
    widgetsContainer.appendChild(crearWidgetStockHeatmap());
    widgetsContainer.appendChild(crearWidgetStockHeatmapCrypto());
}

//Noticas destacadas
function crearWidgetTopStories() {
    const container = document.createElement('div');
    container.className = 'tradingview-widget-container';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container-widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.innerHTML = JSON.stringify({
        "height": "600",
        "width": "100%",
        "locale": "es",
        "feedMode": "all_symbols",
        "displayMode": "regular",
        "colorTheme": "dark",
        "isTransparent": false
    });

    container.appendChild(widget);
    container.appendChild(script);

    return container;
}

//Mapas de calor
function crearWidgetStockHeatmap() {
    const container = document.createElement('div');
    container.className = 'tradingview-widget-container';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container-widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js';
    script.innerHTML = JSON.stringify({
        "height": "600",
        "width": "100%",
        "exchanges": [],
        "locale": "es",
        "dataSource": "SPX500",
        "grouping": "sector",
        "blockSize": "market_cap_basic",
        "blockColor": "change",
        "symbolUrl": "",
        "hasTopBar": true,
        "isDataSetEnabled": true,
        "isZoomEnabled": true,
        "hasSymbolTooltip": true,
        "isMonoSize": false,
        "colorTheme": "dark"
    });

    container.appendChild(widget);
    container.appendChild(script);

    return container;
}

//Mapas de calor cripto
function crearWidgetStockHeatmapCrypto() {
    const container = document.createElement('div');
    container.className = 'tradingview-widget-container';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container-widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js';
    script.innerHTML = JSON.stringify({
        "height": "600",
        "width": "100%",
        "locale": "es",
        "dataSource": "Crypto",
        "blockSize": "market_cap_calc",
        "blockColor": "change",
        "symbolUrl": "",
        "hasTopBar": true,
        "isDataSetEnabled": true,
        "isZoomEnabled": true,
        "hasSymbolTooltip": true,
        "isMonoSize": false,
        "colorTheme": "dark",
    });

    container.appendChild(widget);
    container.appendChild(script);

    return container;
}
