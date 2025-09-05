// Cambodia Macroeconomic Dashboard JavaScript

// Economic data from the application
const economicData = {
    "executive_summary": {
        "years": [2020, 2021, 2022, 2023, 2024],
        "nominal_gdp_usd_bn": [25.9, 26.9, 29.5, 31.7, 34.8],
        "real_gdp_growth": [-3.1, 3.0, 5.2, 5.4, 6.0],
        "inflation_rate": [2.9, 2.9, 5.3, 2.1, 0.8],
        "policy_interest_rate": [0.83, 0.71, 0.58, 0.50, 0.42]
    },
    "gdp_annual": {
        "years": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        "nominal_gdp_usd_bn": [18.1, 20.0, 22.3, 25.0, 27.1, 25.9, 26.9, 29.5, 31.7, 34.8],
        "nominal_gdp_yoy": [9.7, 10.6, 11.4, 12.2, 8.4, -4.5, 3.9, 9.7, 7.5, 9.8],
        "real_gdp_yoy": [7.0, 7.0, 6.9, 7.5, 7.1, -3.1, 3.0, 5.2, 5.4, 6.0],
        "consumption_pct": [75.2, 74.8, 74.5, 74.2, 73.9, 76.1, 75.8, 75.5, 75.2, 74.9],
        "investment_pct": [22.1, 22.4, 22.7, 23.0, 23.4, 21.5, 21.8, 22.2, 22.5, 22.8],
        "government_pct": [5.8, 5.9, 6.0, 6.1, 6.2, 6.8, 6.6, 6.4, 6.3, 6.2],
        "net_exports_pct": [-3.1, -3.1, -3.2, -3.3, -3.5, -4.4, -4.2, -4.1, -4.0, -3.9],
        "per_capita_gdp_usd": [1159, 1270, 1385, 1512, 1644, 1513, 1597, 1787, 1983, 2185]
    },
    "gdp_quarterly": {
        "quarters": ["Q1-2023", "Q2-2023", "Q3-2023", "Q4-2023", "Q1-2024", "Q2-2024", "Q3-2024", "Q4-2024"],
        "nominal_gdp_usd_bn": [7.5, 7.8, 8.0, 8.4, 8.2, 8.5, 8.8, 9.3],
        "real_gdp_qoq": [1.2, 1.3, 1.4, 1.5, 1.4, 1.5, 1.6, 1.5],
        "consumption_pct": [75.3, 75.2, 75.1, 75.0, 74.9, 74.9, 74.8, 74.8],
        "investment_pct": [22.3, 22.4, 22.5, 22.6, 22.7, 22.8, 22.8, 22.9],
        "government_pct": [6.3, 6.3, 6.3, 6.2, 6.2, 6.2, 6.2, 6.2],
        "net_exports_pct": [-3.9, -3.9, -3.9, -3.8, -3.8, -3.9, -3.8, -3.9]
    },
    "inflation_annual": {
        "years": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        "headline_cpi_yoy": [1.2, 3.0, 2.9, 2.5, 1.9, 2.9, 2.9, 5.3, 2.1, 0.8],
        "core_cpi_yoy": [1.0, 2.5, 2.3, 2.1, 1.6, 2.4, 2.5, 4.8, 1.8, 0.6],
        "central_bank_target": [3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0],
        "wage_growth_yoy": [5.2, 5.5, 6.0, 6.5, 6.8, 2.1, 3.5, 6.2, 5.8, 5.5]
    },
    "inflation_quarterly": {
        "quarters": ["Q1-2023", "Q2-2023", "Q3-2023", "Q4-2023", "Q1-2024", "Q2-2024", "Q3-2024", "Q4-2024"],
        "headline_cpi_qoq": [0.8, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        "core_cpi_qoq": [0.7, 0.5, 0.4, 0.2, 0.2, 0.1, 0.1, 0.2]
    },
    "monetary_policy": {
        "years": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        "policy_rate": [1.25, 1.13, 0.98, 0.87, 0.83, 0.83, 0.71, 0.58, 0.50, 0.42],
        "2yr_yield": [2.8, 2.6, 2.5, 2.4, 2.3, 2.2, 2.1, 2.3, 2.5, 2.7],
        "10yr_yield": [4.2, 4.0, 3.8, 3.7, 3.6, 3.5, 3.4, 3.6, 3.8, 4.0],
        "30yr_yield": [5.5, 5.3, 5.1, 5.0, 4.9, 4.8, 4.7, 4.9, 5.1, 5.3]
    },
    "labor_market": {
        "years": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        "unemployment_rate": [0.25, 0.24, 0.23, 0.22, 0.21, 1.26, 0.76, 0.36, 0.23, 0.27],
        "labor_participation_rate": [82.1, 82.5, 82.8, 83.2, 83.5, 80.2, 81.5, 82.0, 81.8, 79.97],
        "employment_to_pop_ratio": [81.9, 82.3, 82.6, 83.0, 83.3, 79.2, 80.9, 81.7, 81.6, 79.7]
    },
    "fiscal_position": {
        "years": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        "gov_revenue_gdp": [19.2, 19.6, 20.1, 21.7, 22.4, 20.8, 18.9, 20.5, 19.8, 19.5],
        "gov_expenditure_gdp": [20.3, 20.5, 20.8, 21.0, 22.5, 24.5, 26.1, 22.6, 24.4, 23.0],
        "fiscal_balance_gdp": [-1.1, -0.9, -0.7, 0.7, -0.1, -3.7, -7.2, -2.1, -4.6, -3.5],
        "public_debt_bn": [5.4, 6.1, 6.8, 7.6, 8.3, 9.0, 10.4, 11.2, 11.8, 12.2],
        "debt_to_gdp": [29.8, 30.5, 30.5, 30.4, 30.6, 34.8, 38.7, 38.0, 37.2, 35.0]
    },
    "external_sector": {
        "years": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        "current_account_bn": [-1.6, -1.7, -1.8, -2.9, -4.0, -0.8, -5.6, -4.8, 0.4, -0.2],
        "trade_balance_bn": [-3.2, -3.0, -3.3, -4.6, -5.8, -3.5, -8.2, -6.8, -2.2, -3.5],
        "fx_reserves_bn": [5.1, 6.7, 8.8, 10.1, 14.6, 17.6, 17.8, 18.7, 20.0, 22.5]
    },
    "financial_conditions": {
        "credit_to_gdp_gap": 2.5,
        "npl_ratio": 7.2,
        "equity_ytd_performance": 8.5,
        "housing_price_yoy": 0.45
    },
    "timeline_events": [
        {
            "date": "Sep 15, 2023",
            "event": "NBC intervened in FX market with $99 million to support Riel stability",
            "impact": "Temporarily halted currency depreciation and restored market confidence"
        },
        {
            "date": "Dec 20, 2023",
            "event": "NBC reduced USD reserve requirements from 8% to 7%",
            "impact": "Eased liquidity conditions to support credit growth amid slowdown"
        },
        {
            "date": "Mar 17, 2024",
            "event": "Government implemented interest rate cap of 18% on microfinance",
            "impact": "Protected borrowers but constrained MFI lending to higher-risk segments"
        },
        {
            "date": "Jun 01, 2024",
            "event": "First-time homebuyer tax exemption for properties under $70,000 announced",
            "impact": "Stimulated housing demand in affordable segment, supporting property market recovery"
        },
        {
            "date": "Nov 15, 2024",
            "event": "Cambodia reached $22.5 billion in foreign reserves, 12.6% YoY increase",
            "impact": "Enhanced external buffer capacity equivalent to 7 months of imports"
        }
    ],
    "calendar_events": [
        {"date": "2025-01-28", "event": "Q4 2024 GDP Release", "type": "gdp"},
        {"date": "2025-02-15", "event": "January CPI Release", "type": "inflation"},
        {"date": "2025-02-28", "event": "NBC Monetary Policy Meeting", "type": "central_bank"},
        {"date": "2025-03-15", "event": "February CPI Release", "type": "inflation"},
        {"date": "2025-03-20", "event": "Trade Balance Report", "type": "trade"},
        {"date": "2025-03-31", "event": "Q1 2025 Fiscal Report", "type": "fiscal"},
        {"date": "2025-04-15", "event": "March CPI Release", "type": "inflation"},
        {"date": "2025-04-28", "event": "Q1 2025 GDP Release", "type": "gdp"},
        {"date": "2025-04-30", "event": "NBC Monetary Policy Meeting", "type": "central_bank"}
    ]
};

// Verdant Rock color scheme
const colors = {
    primary: '#0b3c30',
    accent: '#c7b273',
    background: '#fafaf7',
    text: '#000000',
    chartColors: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B']
};

// Employment data for monthly chart (simulated 36 months)
const employmentMonthlyData = [];
const baseEmployment = 150000;
for (let i = 0; i < 36; i++) {
    const month = new Date();
    month.setMonth(month.getMonth() - (35 - i));
    const change = (Math.random() - 0.5) * 10000 + (i > 24 ? 2000 : 0); // Recovery trend
    employmentMonthlyData.push({
        month: month.toLocaleDateString('en-US', { year: 'numeric', month: 'short' }),
        change: Math.round(change)
    });
}

// Exchange rate data (simulated daily data for 5 years)
const exchangeRateData = [];
let rate = 4050;
for (let i = 0; i < 1825; i++) { // 5 years of daily data
    const date = new Date();
    date.setDate(date.getDate() - (1824 - i));
    rate += (Math.random() - 0.5) * 10;
    exchangeRateData.push({
        date: date.toISOString().split('T')[0],
        rate: Math.round(rate)
    });
}

// DOM elements
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Tab switching functionality
function switchTab(targetTab) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
    document.getElementById(targetTab).classList.add('active');
}

// Event listeners for tabs
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        switchTab(targetTab);
    });
});

// Chart configuration defaults
Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = colors.text;

// Helper function to create charts
function createChart(canvasId, config) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    
    const ctx = canvas.getContext('2d');
    return new Chart(ctx, config);
}

// Executive Summary Charts
function createExecutiveSummaryCharts() {
    // Nominal GDP Chart
    createChart('nominalGdpChart', {
        type: 'line',
        data: {
            labels: economicData.executive_summary.years,
            datasets: [{
                label: 'Nominal GDP (USD Billion)',
                data: economicData.executive_summary.nominal_gdp_usd_bn,
                borderColor: colors.primary,
                backgroundColor: colors.primary,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Nominal GDP (Last 5 Years)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: { callback: value => '$' + value + 'B' }
                }
            }
        }
    });

    // Real GDP Growth Chart
    createChart('realGdpGrowthChart', {
        type: 'bar',
        data: {
            labels: economicData.executive_summary.years,
            datasets: [{
                label: 'Real GDP Growth (%)',
                data: economicData.executive_summary.real_gdp_growth,
                backgroundColor: economicData.executive_summary.real_gdp_growth.map(val => val < 0 ? '#DC3545' : colors.accent),
                borderColor: colors.primary,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Real GDP Growth (Last 5 Years)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Inflation Chart
    createChart('inflationChart', {
        type: 'line',
        data: {
            labels: economicData.executive_summary.years,
            datasets: [{
                label: 'Inflation Rate (%)',
                data: economicData.executive_summary.inflation_rate,
                borderColor: '#E67E22',
                backgroundColor: '#E67E22',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Inflation Rate (Last 5 Years)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Policy Rate Chart
    createChart('policyRateChart', {
        type: 'line',
        data: {
            labels: economicData.executive_summary.years,
            datasets: [{
                label: 'Policy Interest Rate (%)',
                data: economicData.executive_summary.policy_interest_rate,
                borderColor: colors.accent,
                backgroundColor: colors.accent,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Policy Interest Rate (Last 5 Years)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });
}

// GDP and Economic Output Charts
function createGDPCharts() {
    // 10-year Nominal GDP
    createChart('nominalGdp10yChart', {
        type: 'line',
        data: {
            labels: economicData.gdp_annual.years,
            datasets: [{
                label: 'Nominal GDP (USD Billion)',
                data: economicData.gdp_annual.nominal_gdp_usd_bn,
                borderColor: colors.primary,
                backgroundColor: colors.primary,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Nominal GDP (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: { callback: value => '$' + value + 'B' }
                }
            }
        }
    });

    // 10-year Real GDP Growth
    createChart('realGdp10yChart', {
        type: 'bar',
        data: {
            labels: economicData.gdp_annual.years,
            datasets: [{
                label: 'Real GDP Growth (%)',
                data: economicData.gdp_annual.real_gdp_yoy,
                backgroundColor: economicData.gdp_annual.real_gdp_yoy.map(val => val < 0 ? '#DC3545' : colors.accent),
                borderColor: colors.primary,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Real GDP Growth YoY (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // GDP Composition
    createChart('gdpCompositionChart', {
        type: 'line',
        data: {
            labels: economicData.gdp_annual.years,
            datasets: [
                {
                    label: 'Consumption',
                    data: economicData.gdp_annual.consumption_pct,
                    borderColor: colors.chartColors[0],
                    backgroundColor: colors.chartColors[0] + '20',
                    fill: true
                },
                {
                    label: 'Investment',
                    data: economicData.gdp_annual.investment_pct,
                    borderColor: colors.chartColors[1],
                    backgroundColor: colors.chartColors[1] + '20',
                    fill: true
                },
                {
                    label: 'Government',
                    data: economicData.gdp_annual.government_pct,
                    borderColor: colors.chartColors[2],
                    backgroundColor: colors.chartColors[2] + '20',
                    fill: true
                },
                {
                    label: 'Net Exports',
                    data: economicData.gdp_annual.net_exports_pct,
                    borderColor: colors.chartColors[3],
                    backgroundColor: colors.chartColors[3] + '20',
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'GDP Composition by Sector (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                }
            },
            scales: {
                y: {
                    ticks: { callback: value => value + '%' }
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            }
        }
    });
}

// Inflation Charts
function createInflationCharts() {
    // Headline CPI
    createChart('headlineCpiChart', {
        type: 'line',
        data: {
            labels: economicData.inflation_annual.years,
            datasets: [{
                label: 'Headline CPI YoY (%)',
                data: economicData.inflation_annual.headline_cpi_yoy,
                borderColor: '#E74C3C',
                backgroundColor: '#E74C3C',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Headline CPI YoY (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Core CPI
    createChart('coreCpiChart', {
        type: 'line',
        data: {
            labels: economicData.inflation_annual.years,
            datasets: [{
                label: 'Core CPI YoY (%)',
                data: economicData.inflation_annual.core_cpi_yoy,
                borderColor: '#F39C12',
                backgroundColor: '#F39C12',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Core CPI YoY (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Inflation Target
    createChart('inflationTargetChart', {
        type: 'line',
        data: {
            labels: economicData.inflation_annual.years,
            datasets: [
                {
                    label: 'Headline CPI',
                    data: economicData.inflation_annual.headline_cpi_yoy,
                    borderColor: '#E74C3C',
                    backgroundColor: '#E74C3C',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Central Bank Target',
                    data: economicData.inflation_annual.central_bank_target,
                    borderColor: colors.primary,
                    backgroundColor: colors.primary,
                    borderDash: [5, 5],
                    tension: 0,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Inflation vs Central Bank Target (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });
}

// Monetary Policy Charts
function createMonetaryPolicyCharts() {
    // Policy Rate 10Y
    createChart('policyRate10yChart', {
        type: 'line',
        data: {
            labels: economicData.monetary_policy.years,
            datasets: [{
                label: 'Policy Rate (%)',
                data: economicData.monetary_policy.policy_rate,
                borderColor: colors.accent,
                backgroundColor: colors.accent,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Central Bank Policy Rate (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // 2Y Yield
    createChart('yield2yChart', {
        type: 'line',
        data: {
            labels: economicData.monetary_policy.years,
            datasets: [{
                label: '2-Year Yield (%)',
                data: economicData.monetary_policy['2yr_yield'],
                borderColor: colors.chartColors[0],
                backgroundColor: colors.chartColors[0],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '2-Year Government Bond Yield (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // 10Y Yield
    createChart('yield10yChart', {
        type: 'line',
        data: {
            labels: economicData.monetary_policy.years,
            datasets: [{
                label: '10-Year Yield (%)',
                data: economicData.monetary_policy['10yr_yield'],
                borderColor: colors.chartColors[1],
                backgroundColor: colors.chartColors[1],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '10-Year Government Bond Yield (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // 30Y Yield
    createChart('yield30yChart', {
        type: 'line',
        data: {
            labels: economicData.monetary_policy.years,
            datasets: [{
                label: '30-Year Yield (%)',
                data: economicData.monetary_policy['30yr_yield'],
                borderColor: colors.chartColors[2],
                backgroundColor: colors.chartColors[2],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '30-Year Government Bond Yield (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Yield Curve
    createChart('yieldCurveChart', {
        type: 'line',
        data: {
            labels: ['3M', '6M', '1Y', '2Y', '5Y', '10Y', '30Y'],
            datasets: [{
                label: 'Current Yield Curve (%)',
                data: [0.35, 0.45, 1.2, 2.7, 3.2, 4.0, 5.3],
                borderColor: colors.primary,
                backgroundColor: colors.primary,
                tension: 0.4,
                fill: false,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Government Bond Yield Curve (Current)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });
}

// Labor Market Charts
function createLaborMarketCharts() {
    // Unemployment Rate
    createChart('unemploymentChart', {
        type: 'line',
        data: {
            labels: economicData.labor_market.years,
            datasets: [{
                label: 'Unemployment Rate (%)',
                data: economicData.labor_market.unemployment_rate,
                borderColor: '#E74C3C',
                backgroundColor: '#E74C3C',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Unemployment Rate (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Labor Participation
    createChart('laborParticipationChart', {
        type: 'line',
        data: {
            labels: economicData.labor_market.years,
            datasets: [{
                label: 'Labor Force Participation Rate (%)',
                data: economicData.labor_market.labor_participation_rate,
                borderColor: colors.chartColors[0],
                backgroundColor: colors.chartColors[0],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Labor Force Participation Rate (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 75,
                    max: 85,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Employment to Population Ratio
    createChart('employmentRatioChart', {
        type: 'line',
        data: {
            labels: economicData.labor_market.years,
            datasets: [{
                label: 'Employment-to-Population Ratio (%)',
                data: economicData.labor_market.employment_to_pop_ratio,
                borderColor: colors.chartColors[1],
                backgroundColor: colors.chartColors[1],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Employment-to-Population Ratio (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 75,
                    max: 85,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Employment Change (Monthly)
    createChart('employmentChangeChart', {
        type: 'bar',
        data: {
            labels: employmentMonthlyData.slice(-12).map(d => d.month),
            datasets: [{
                label: 'Employment Change',
                data: employmentMonthlyData.slice(-12).map(d => d.change),
                backgroundColor: employmentMonthlyData.slice(-12).map(d => d.change > 0 ? colors.accent : '#E74C3C'),
                borderColor: colors.primary,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Employment Change (Last 12 Months)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    ticks: { 
                        callback: function(value) {
                            return (value >= 0 ? '+' : '') + (value/1000).toFixed(1) + 'K';
                        }
                    }
                }
            }
        }
    });
}

// Fiscal Position Charts
function createFiscalCharts() {
    // Government Revenue
    createChart('govRevenueChart', {
        type: 'line',
        data: {
            labels: economicData.fiscal_position.years,
            datasets: [{
                label: 'Government Revenue (% of GDP)',
                data: economicData.fiscal_position.gov_revenue_gdp,
                borderColor: colors.chartColors[0],
                backgroundColor: colors.chartColors[0],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Government Revenue (% of GDP, 2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Government Expenditure
    createChart('govExpenditureChart', {
        type: 'line',
        data: {
            labels: economicData.fiscal_position.years,
            datasets: [{
                label: 'Government Expenditure (% of GDP)',
                data: economicData.fiscal_position.gov_expenditure_gdp,
                borderColor: colors.chartColors[1],
                backgroundColor: colors.chartColors[1],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Government Expenditure (% of GDP, 2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Fiscal Balance
    createChart('fiscalBalanceChart', {
        type: 'bar',
        data: {
            labels: economicData.fiscal_position.years,
            datasets: [{
                label: 'Fiscal Balance (% of GDP)',
                data: economicData.fiscal_position.fiscal_balance_gdp,
                backgroundColor: economicData.fiscal_position.fiscal_balance_gdp.map(val => val >= 0 ? colors.accent : '#E74C3C'),
                borderColor: colors.primary,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Fiscal Balance (% of GDP, 2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Public Debt Level
    createChart('publicDebtChart', {
        type: 'line',
        data: {
            labels: economicData.fiscal_position.years,
            datasets: [{
                label: 'Public Debt (USD Billion)',
                data: economicData.fiscal_position.public_debt_bn,
                borderColor: colors.chartColors[2],
                backgroundColor: colors.chartColors[2],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Public Debt Level (USD Billion, 2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => '$' + value + 'B' }
                }
            }
        }
    });

    // Debt to GDP
    createChart('debtToGdpChart', {
        type: 'line',
        data: {
            labels: economicData.fiscal_position.years,
            datasets: [{
                label: 'Public Debt-to-GDP (%)',
                data: economicData.fiscal_position.debt_to_gdp,
                borderColor: colors.chartColors[3],
                backgroundColor: colors.chartColors[3],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Public Debt-to-GDP Ratio (2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });
}

// External Sector Charts
function createExternalSectorCharts() {
    // Current Account
    createChart('currentAccountChart', {
        type: 'bar',
        data: {
            labels: economicData.external_sector.years,
            datasets: [{
                label: 'Current Account Balance (USD Billion)',
                data: economicData.external_sector.current_account_bn,
                backgroundColor: economicData.external_sector.current_account_bn.map(val => val >= 0 ? colors.accent : '#E74C3C'),
                borderColor: colors.primary,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Current Account Balance (USD Billion, 2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    ticks: { callback: value => '$' + value + 'B' }
                }
            }
        }
    });

    // Trade Balance
    createChart('tradeBalanceChart', {
        type: 'bar',
        data: {
            labels: economicData.external_sector.years,
            datasets: [{
                label: 'Trade Balance (USD Billion)',
                data: economicData.external_sector.trade_balance_bn,
                backgroundColor: economicData.external_sector.trade_balance_bn.map(val => val >= 0 ? colors.accent : '#E74C3C'),
                borderColor: colors.primary,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Trade Balance (USD Billion, 2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    ticks: { callback: value => '$' + value + 'B' }
                }
            }
        }
    });

    // FX Reserves
    createChart('fxReservesChart', {
        type: 'line',
        data: {
            labels: economicData.external_sector.years,
            datasets: [{
                label: 'Foreign Exchange Reserves (USD Billion)',
                data: economicData.external_sector.fx_reserves_bn,
                borderColor: colors.chartColors[0],
                backgroundColor: colors.chartColors[0],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Foreign Exchange Reserves (USD Billion, 2015-2024)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => '$' + value + 'B' }
                }
            }
        }
    });

    // Exchange Rate (sample last 12 months)
    createChart('exchangeRateChart', {
        type: 'line',
        data: {
            labels: exchangeRateData.slice(-365, -1).filter((_, i) => i % 30 === 0).map(d => new Date(d.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })),
            datasets: [{
                label: 'KHR/USD Exchange Rate',
                data: exchangeRateData.slice(-365, -1).filter((_, i) => i % 30 === 0).map(d => d.rate),
                borderColor: colors.chartColors[1],
                backgroundColor: colors.chartColors[1],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'KHR/USD Exchange Rate (Last 12 Months)',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: { callback: value => value.toLocaleString() }
                }
            }
        }
    });
}

// Financial Conditions Chart
function createFinancialConditionsChart() {
    createChart('financialConditionsChart', {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'NPL Ratio (%)',
                data: [3.2, 4.8, 6.5, 7.0, 7.2],
                borderColor: '#E74C3C',
                backgroundColor: '#E74C3C',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Banking Sector NPL Ratio Trend',
                    color: colors.primary,
                    font: { weight: 'bold', size: 14 }
                },
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });
}

// Create Tables
function createTables() {
    // GDP Annual Table
    const gdpAnnualTable = document.getElementById('gdpAnnualTable');
    if (gdpAnnualTable) {
        gdpAnnualTable.innerHTML = `
            <thead>
                <tr>
                    <th>Metric</th>
                    ${economicData.gdp_annual.years.map(year => `<th>${year}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nominal GDP ($B)</td>
                    ${economicData.gdp_annual.nominal_gdp_usd_bn.map(val => `<td>$${val.toFixed(1)}B</td>`).join('')}
                </tr>
                <tr>
                    <td>Real GDP YoY (%)</td>
                    ${economicData.gdp_annual.real_gdp_yoy.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Consumption (%)</td>
                    ${economicData.gdp_annual.consumption_pct.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Investment (%)</td>
                    ${economicData.gdp_annual.investment_pct.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Per Capita GDP ($)</td>
                    ${economicData.gdp_annual.per_capita_gdp_usd.map(val => `<td>$${val.toLocaleString()}</td>`).join('')}
                </tr>
            </tbody>
        `;
    }

    // GDP Quarterly Table
    const gdpQuarterlyTable = document.getElementById('gdpQuarterlyTable');
    if (gdpQuarterlyTable) {
        gdpQuarterlyTable.innerHTML = `
            <thead>
                <tr>
                    <th>Metric</th>
                    ${economicData.gdp_quarterly.quarters.map(q => `<th>${q}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nominal GDP ($B)</td>
                    ${economicData.gdp_quarterly.nominal_gdp_usd_bn.map(val => `<td>$${val.toFixed(1)}B</td>`).join('')}
                </tr>
                <tr>
                    <td>Real GDP QoQ (%)</td>
                    ${economicData.gdp_quarterly.real_gdp_qoq.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Consumption (%)</td>
                    ${economicData.gdp_quarterly.consumption_pct.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
            </tbody>
        `;
    }

    // Inflation Annual Table
    const inflationAnnualTable = document.getElementById('inflationAnnualTable');
    if (inflationAnnualTable) {
        inflationAnnualTable.innerHTML = `
            <thead>
                <tr>
                    <th>Metric</th>
                    ${economicData.inflation_annual.years.map(year => `<th>${year}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Headline CPI (%)</td>
                    ${economicData.inflation_annual.headline_cpi_yoy.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Core CPI (%)</td>
                    ${economicData.inflation_annual.core_cpi_yoy.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Target (%)</td>
                    ${economicData.inflation_annual.central_bank_target.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Wage Growth (%)</td>
                    ${economicData.inflation_annual.wage_growth_yoy.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
            </tbody>
        `;
    }

    // Inflation Quarterly Table
    const inflationQuarterlyTable = document.getElementById('inflationQuarterlyTable');
    if (inflationQuarterlyTable) {
        inflationQuarterlyTable.innerHTML = `
            <thead>
                <tr>
                    <th>Metric</th>
                    ${economicData.inflation_quarterly.quarters.map(q => `<th>${q}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Headline CPI QoQ (%)</td>
                    ${economicData.inflation_quarterly.headline_cpi_qoq.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Core CPI QoQ (%)</td>
                    ${economicData.inflation_quarterly.core_cpi_qoq.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
            </tbody>
        `;
    }

    // Labor Annual Table
    const laborAnnualTable = document.getElementById('laborAnnualTable');
    if (laborAnnualTable) {
        laborAnnualTable.innerHTML = `
            <thead>
                <tr>
                    <th>Metric</th>
                    ${economicData.labor_market.years.map(year => `<th>${year}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Unemployment (%)</td>
                    ${economicData.labor_market.unemployment_rate.map(val => `<td>${val.toFixed(2)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Participation (%)</td>
                    ${economicData.labor_market.labor_participation_rate.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Emp/Pop Ratio (%)</td>
                    ${economicData.labor_market.employment_to_pop_ratio.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
            </tbody>
        `;
    }

    // Fiscal Annual Table
    const fiscalAnnualTable = document.getElementById('fiscalAnnualTable');
    if (fiscalAnnualTable) {
        fiscalAnnualTable.innerHTML = `
            <thead>
                <tr>
                    <th>Metric</th>
                    ${economicData.fiscal_position.years.map(year => `<th>${year}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Revenue (% GDP)</td>
                    ${economicData.fiscal_position.gov_revenue_gdp.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Expenditure (% GDP)</td>
                    ${economicData.fiscal_position.gov_expenditure_gdp.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Balance (% GDP)</td>
                    ${economicData.fiscal_position.fiscal_balance_gdp.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
                <tr>
                    <td>Debt ($B)</td>
                    ${economicData.fiscal_position.public_debt_bn.map(val => `<td>$${val.toFixed(1)}B</td>`).join('')}
                </tr>
                <tr>
                    <td>Debt/GDP (%)</td>
                    ${economicData.fiscal_position.debt_to_gdp.map(val => `<td>${val.toFixed(1)}%</td>`).join('')}
                </tr>
            </tbody>
        `;
    }

    // External Annual Table
    const externalAnnualTable = document.getElementById('externalAnnualTable');
    if (externalAnnualTable) {
        externalAnnualTable.innerHTML = `
            <thead>
                <tr>
                    <th>Metric</th>
                    ${economicData.external_sector.years.map(year => `<th>${year}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Current Account ($B)</td>
                    ${economicData.external_sector.current_account_bn.map(val => `<td>$${val.toFixed(1)}B</td>`).join('')}
                </tr>
                <tr>
                    <td>Trade Balance ($B)</td>
                    ${economicData.external_sector.trade_balance_bn.map(val => `<td>$${val.toFixed(1)}B</td>`).join('')}
                </tr>
                <tr>
                    <td>FX Reserves ($B)</td>
                    ${economicData.external_sector.fx_reserves_bn.map(val => `<td>$${val.toFixed(1)}B</td>`).join('')}
                </tr>
            </tbody>
        `;
    }
}

// Populate Timeline and Calendar
function populateTimelineAndCalendar() {
    // Timeline events
    const timelineList = document.getElementById('timeline-events');
    if (timelineList) {
        timelineList.innerHTML = economicData.timeline_events.map(event => 
            `<li><strong>${event.date}:</strong> ${event.event}. <em>Impact: ${event.impact}</em></li>`
        ).join('');
    }

    // Calendar events
    const calendarList = document.getElementById('calendar-events');
    if (calendarList) {
        calendarList.innerHTML = economicData.calendar_events.map(event => {
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
            return `<li><strong>${formattedDate}:</strong> ${event.event}</li>`;
        }).join('');
    }
}

// Initialize Dashboard
function initializeDashboard() {
    // Create all charts
    createExecutiveSummaryCharts();
    createGDPCharts();
    createInflationCharts();
    createMonetaryPolicyCharts();
    createLaborMarketCharts();
    createFiscalCharts();
    createExternalSectorCharts();
    createFinancialConditionsChart();
    
    // Create all tables
    createTables();
    
    // Populate timeline and calendar
    populateTimelineAndCalendar();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDashboard);