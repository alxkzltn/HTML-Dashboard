// Verdant Rock Brand Colors for Charts
const VR_COLORS = {
    primary: '#0b3c30',
    accent: '#c7b273',
    background: '#fafaf7',
    surface: '#ffffff',
    text: '#000000',
    chartColors: ['#0b3c30', '#c7b273', '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325']
};

// Economic data
const economicData = {
    gdp: {
        years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        nominal_gdp: [20.02, 22.16, 24.57, 27.09, 36.68, 34.82, 36.79, 39.99, 42.34, 45.5],
        real_growth: [7.0, 6.9, 7.0, 7.5, 7.1, -3.1, 3.0, 5.2, 5.0, 5.5]
    },
    inflation: {
        years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        headline_cpi: [1.2, 3.0, 2.9, 2.5, 1.9, 2.9, 2.9, 5.3, 2.1, 0.8],
        target: [3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0]
    },
    external: {
        years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        current_account: [-9.5, -8.8, -7.8, -12.2, -17.8, -2.4, -11.2, -14.5, 1.3, -1.8],
        fx_reserves: [7.0, 9.1, 12.2, 14.2, 18.2, 18.4, 18.2, 18.1, 18.3, 18.3]
    }
};

// Global chart instances
let chartInstances = {};

// Tab Navigation - Robust Implementation
function initializeTabs() {
    console.log('Initializing tabs...');
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    console.log(`Found ${tabBtns.length} tab buttons and ${tabPanes.length} tab panes`);
    
    if (tabBtns.length === 0 || tabPanes.length === 0) {
        console.error('Tab buttons or panes not found!');
        return;
    }
    
    // Clear any existing event listeners
    tabBtns.forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    });
    
    // Get updated references after cloning
    const updatedTabBtns = document.querySelectorAll('.tab-btn');
    
    updatedTabBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetTab = this.getAttribute('data-tab');
            console.log(`Tab clicked: ${targetTab}`);
            
            if (!targetTab) {
                console.error('No data-tab attribute found');
                return;
            }
            
            switchToTab(targetTab);
        });
    });
    
    // Handle initial hash or default to summary
    const initialHash = window.location.hash.slice(1);
    const initialTab = initialHash && document.getElementById(initialHash) ? initialHash : 'summary';
    switchToTab(initialTab);
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            switchToTab(hash);
        }
    });
    
    console.log('Tabs initialized successfully');
}

function switchToTab(targetTab) {
    console.log(`Switching to tab: ${targetTab}`);
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const targetPane = document.getElementById(targetTab);
    
    if (!targetPane) {
        console.error(`Tab pane ${targetTab} not found!`);
        return;
    }
    
    // Remove active classes
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    
    tabPanes.forEach(pane => {
        pane.classList.remove('active');
        pane.setAttribute('aria-hidden', 'true');
    });
    
    // Add active classes
    const targetBtn = document.querySelector(`[data-tab="${targetTab}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
        targetBtn.setAttribute('aria-selected', 'true');
    }
    
    targetPane.classList.add('active');
    targetPane.setAttribute('aria-hidden', 'false');
    
    // Update URL
    if (window.location.hash.slice(1) !== targetTab) {
        window.history.pushState(null, null, `#${targetTab}`);
    }
    
    // Handle tab-specific initialization
    handleTabSwitch(targetTab);
    
    // Scroll to top of content
    document.querySelector('.tab-content').scrollTop = 0;
    
    console.log(`Successfully switched to tab: ${targetTab}`);
}

// Chart Creation Functions with Error Handling
function createGDPChart() {
    const ctx = document.getElementById('gdpChart');
    if (!ctx) {
        console.warn('GDP chart canvas not found');
        return;
    }

    try {
        // Destroy existing chart if it exists
        if (chartInstances.gdpChart) {
            chartInstances.gdpChart.destroy();
        }

        chartInstances.gdpChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: economicData.gdp.years.slice(-5),
                datasets: [{
                    label: 'Nominal GDP (USD Billions)',
                    data: economicData.gdp.nominal_gdp.slice(-5),
                    backgroundColor: VR_COLORS.primary,
                    borderColor: VR_COLORS.accent,
                    borderWidth: 2,
                    borderRadius: 4,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: VR_COLORS.primary,
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: VR_COLORS.accent,
                        borderWidth: 1
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value + 'B';
                            },
                            color: VR_COLORS.text,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(11, 60, 48, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: VR_COLORS.text,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(11, 60, 48, 0.1)'
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating GDP chart:', error);
        handleChartError('gdpChart', error);
    }
}

function createGrowthChart() {
    const ctx = document.getElementById('growthChart');
    if (!ctx) {
        console.warn('Growth chart canvas not found');
        return;
    }

    try {
        if (chartInstances.growthChart) {
            chartInstances.growthChart.destroy();
        }

        chartInstances.growthChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: economicData.gdp.years.slice(-5),
                datasets: [{
                    label: 'Real GDP Growth (%)',
                    data: economicData.gdp.real_growth.slice(-5),
                    borderColor: VR_COLORS.accent,
                    backgroundColor: VR_COLORS.accent + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3,
                    pointBackgroundColor: VR_COLORS.accent,
                    pointBorderColor: VR_COLORS.primary,
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: VR_COLORS.primary,
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: VR_COLORS.accent,
                        borderWidth: 1
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            color: VR_COLORS.text,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(11, 60, 48, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: VR_COLORS.text,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(11, 60, 48, 0.1)'
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating growth chart:', error);
        handleChartError('growthChart', error);
    }
}

function createInflationSummaryChart() {
    const ctx = document.getElementById('inflationChart');
    if (!ctx) {
        console.warn('Inflation chart canvas not found');
        return;
    }

    try {
        if (chartInstances.inflationChart) {
            chartInstances.inflationChart.destroy();
        }

        chartInstances.inflationChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: economicData.inflation.years.slice(-5),
                datasets: [{
                    label: 'Headline CPI (%)',
                    data: economicData.inflation.headline_cpi.slice(-5),
                    borderColor: VR_COLORS.primary,
                    backgroundColor: VR_COLORS.primary + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3,
                    pointBackgroundColor: VR_COLORS.primary,
                    pointBorderColor: VR_COLORS.accent,
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: VR_COLORS.primary,
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: VR_COLORS.accent,
                        borderWidth: 1
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            color: VR_COLORS.text,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(11, 60, 48, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: VR_COLORS.text,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(11, 60, 48, 0.1)'
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating inflation chart:', error);
        handleChartError('inflationChart', error);
    }
}

function createPolicyChart() {
    const ctx = document.getElementById('policyChart');
    if (!ctx) {
        console.warn('Policy chart canvas not found');
        return;
    }

    try {
        if (chartInstances.policyChart) {
            chartInstances.policyChart.destroy();
        }

        const policyRates = [2.5, 2.0, 1.5, 1.0, 0.45];

        chartInstances.policyChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: economicData.gdp.years.slice(-5),
                datasets: [{
                    label: 'Policy Interest Rate (%)',
                    data: policyRates,
                    borderColor: VR_COLORS.chartColors[2],
                    backgroundColor: VR_COLORS.chartColors[2] + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3,
                    pointBackgroundColor: VR_COLORS.chartColors[2],
                    pointBorderColor: VR_COLORS.primary,
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: VR_COLORS.primary,
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: VR_COLORS.accent,
                        borderWidth: 1
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            color: VR_COLORS.text,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(11, 60, 48, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: VR_COLORS.text,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(11, 60, 48, 0.1)'
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating policy chart:', error);
        handleChartError('policyChart', error);
    }
}

function createExternalChart() {
    const ctx = document.getElementById('externalChart');
    if (!ctx) {
        console.warn('External chart canvas not found');
        return;
    }

    try {
        if (chartInstances.externalChart) {
            chartInstances.externalChart.destroy();
        }

        chartInstances.externalChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: economicData.external.years,
                datasets: [
                    {
                        label: 'Current Account Balance (% GDP)',
                        data: economicData.external.current_account,
                        borderColor: VR_COLORS.primary,
                        backgroundColor: VR_COLORS.primary + '20',
                        borderWidth: 3,
                        fill: false,
                        tension: 0.3,
                        pointBackgroundColor: VR_COLORS.primary,
                        pointBorderColor: VR_COLORS.accent,
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        yAxisID: 'y'
                    },
                    {
                        label: 'FX Reserves (USD Billions)',
                        data: economicData.external.fx_reserves,
                        borderColor: VR_COLORS.accent,
                        backgroundColor: VR_COLORS.accent + '20',
                        borderWidth: 3,
                        fill: false,
                        tension: 0.3,
                        pointBackgroundColor: VR_COLORS.accent,
                        pointBorderColor: VR_COLORS.primary,
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: VR_COLORS.text,
                            font: {
                                size: 12,
                                weight: '500',
                                family: 'Inter'
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'External Sector Indicators',
                        color: VR_COLORS.primary,
                        font: {
                            size: 16,
                            weight: '600',
                            family: 'Inter'
                        }
                    },
                    tooltip: {
                        backgroundColor: VR_COLORS.primary,
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: VR_COLORS.accent,
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Year',
                            color: VR_COLORS.text,
                            font: {
                                family: 'Inter'
                            }
                        },
                        ticks: {
                            color: VR_COLORS.text,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(11, 60, 48, 0.1)'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Current Account (% GDP)',
                            color: VR_COLORS.primary,
                            font: {
                                family: 'Inter'
                            }
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            color: VR_COLORS.primary,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(11, 60, 48, 0.1)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'FX Reserves (USD Billions)',
                            color: VR_COLORS.accent,
                            font: {
                                family: 'Inter'
                            }
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + value + 'B';
                            },
                            color: VR_COLORS.accent,
                            font: {
                                family: 'Inter'
                            }
                        },
                        grid: {
                            drawOnChartArea: false,
                        },
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating external chart:', error);
        handleChartError('externalChart', error);
    }
}

// Tab-specific initialization
function handleTabSwitch(tabName) {
    console.log(`Handling tab switch for: ${tabName}`);
    
    // Add small delay to ensure DOM is ready
    setTimeout(() => {
        switch(tabName) {
            case 'summary':
                createGDPChart();
                createGrowthChart();
                createInflationSummaryChart();
                createPolicyChart();
                break;
            case 'external':
                createExternalChart();
                break;
            case 'resilience':
                animateResilienceScore();
                break;
            default:
                // No specific initialization needed
                break;
        }
    }, 150);
}

// Utility Functions
function animateResilienceScore() {
    const scoreElement = document.querySelector('.score-number');
    if (scoreElement) {
        animateValue(scoreElement, 0, 3.5, 2000);
    }
}

function animateValue(element, start, end, duration) {
    if (!element) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = progress * (end - start) + start;
        element.textContent = current.toFixed(1);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Error handling
function handleChartError(chartId, error) {
    console.error(`Error creating chart ${chartId}:`, error);
    const element = document.getElementById(chartId);
    if (element) {
        const parent = element.parentElement;
        parent.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 300px; color: #e74c3c; flex-direction: column;">
                <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">Chart Loading Error</div>
                <div style="font-size: 0.9rem; opacity: 0.7;">Please refresh the page</div>
            </div>
        `;
    }
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing Verdant Rock Cambodia Dashboard');
    
    // Initialize tab navigation with error handling
    try {
        initializeTabs();
    } catch (error) {
        console.error('Error initializing tabs:', error);
    }
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Arrow key navigation for tabs
        if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
            e.preventDefault();
            const activeTab = document.querySelector('.tab-btn.active');
            const allTabs = Array.from(document.querySelectorAll('.tab-btn'));
            const currentIndex = allTabs.indexOf(activeTab);
            
            let nextIndex;
            if (e.key === 'ArrowLeft') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : allTabs.length - 1;
            } else {
                nextIndex = currentIndex < allTabs.length - 1 ? currentIndex + 1 : 0;
            }
            
            const nextTab = allTabs[nextIndex];
            if (nextTab) {
                nextTab.click();
                nextTab.focus();
            }
        }
    });
    
    // Handle window resize for charts
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Resize all chart instances
            Object.values(chartInstances).forEach(chart => {
                if (chart && typeof chart.resize === 'function') {
                    try {
                        chart.resize();
                    } catch (error) {
                        console.warn('Error resizing chart:', error);
                    }
                }
            });
        }, 300);
    });
    
    // Add accessibility enhancements
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', btn.classList.contains('active') ? 'true' : 'false');
    });
    
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.setAttribute('role', 'tabpanel');
        pane.setAttribute('aria-hidden', pane.classList.contains('active') ? 'false' : 'true');
    });
    
    console.log('Verdant Rock Cambodia Dashboard initialized successfully');
});

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

// Handle Chart.js loading
window.addEventListener('load', function() {
    if (typeof Chart === 'undefined') {
        console.error('Chart.js failed to load');
        // Show fallback message for charts
        document.querySelectorAll('canvas').forEach(canvas => {
            const parent = canvas.parentElement;
            parent.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; height: 300px; color: #f39c12; flex-direction: column;">
                    <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">Charts Unavailable</div>
                    <div style="font-size: 0.9rem; opacity: 0.7;">Chart library failed to load</div>
                </div>
            `;
        });
    }
});