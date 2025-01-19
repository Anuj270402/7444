
const weekData = {
    labels: ['Mon, Dec 10', 'Tue, Dec 11', 'Wed, Dec 12', 'Thu, Dec 13', 'Fri, Dec 14', 'Sat, Dec 15', 'Sun, Dec 16'],
    datasets: [
        {
            label: 'Project X',
            data: [2, 3, 2, 4, 2, 0, 0],
            backgroundColor: '#FF69B4'
        },
        {
            label: 'Office',
            data: [0, 3, 1, 4, 2, 0, 0],
            backgroundColor: '#FFD700'
        },
        {
            label: 'ACME',
            data: [1, 0, 0, 2, 1, 0, 0],
            backgroundColor: '#00BFFF'
        },
        {
            label: 'Time-off',
            data: [1, 2, 1, 2, 0, 0, 0],
            backgroundColor: '#696969'
        }
    ]
};

const distributionData = {
    labels: ['Project X', 'Office', 'ACME', 'Time-off'],
    datasets: [{
        data: [20, 10, 4, 2],
        backgroundColor: ['#FF69B4', '#FFD700', '#00BFFF', '#696969']
    }]
};

document.addEventListener('DOMContentLoaded', () => {
    
    const weekChart = new Chart(document.getElementById('weekChart'), {
        type: 'bar',
        data: weekData,
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    max: 12,
                    ticks: {
                        stepSize: 2
                    }
                }
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            }
        }
    });

  
    const distributionChart = new Chart(document.getElementById('distributionChart'), {
        type: 'doughnut',
        data: distributionData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            cutout: '70%'
        }
    });


    const dateButtons = document.querySelectorAll('.nav-btn');
    const currentWeek = document.querySelector('.current-week');
    let currentWeekIndex = 0;
    const weeks = ['Previous week', 'This week', 'Next week'];

    dateButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (index === 0 && currentWeekIndex > 0) {
                currentWeekIndex--;
            } else if (index === 1 && currentWeekIndex < weeks.length - 1) {
                currentWeekIndex++;
            }
            currentWeek.textContent = weeks[currentWeekIndex];
        });
    });
});


function formatTime(hours) {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    return `${wholeHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function updateTeamActivity() {

    console.log('Updating team activity...');
}


setInterval(updateTeamActivity, 60000);