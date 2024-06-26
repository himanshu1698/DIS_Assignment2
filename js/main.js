/**
 * Your JS code here
 */

/**
 * Sample code
 */
document.addEventListener('DOMContentLoaded', () => {
  const vacationForm = document.getElementById('vacationForm');
  const vacationTableBody = document.getElementById('vacationTableBody');
  let vacations = [];

  vacationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const vacationName = e.target.vacationName.value;
      const destination = e.target.destination.value;
      const dates = e.target.dates.value;
      vacations.push({ vacationName, destination, dates });
      e.target.reset();
      renderVacations();
  });

  function renderVacations() {
      vacationTableBody.innerHTML = '';
      vacations.forEach((vacation, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${vacation.vacationName}</td>
              <td>${vacation.destination}</td>
              <td>${vacation.dates}</td>
              <td>
                  <button onclick="editVacation(${index})">Edit</button>
                  <button onclick="deleteVacation(${index})">Delete</button>
              </td>
          `;
          vacationTableBody.appendChild(row);
      });
  }

  window.editVacation = function(index) {
      const vacation = vacations[index];
      vacationForm.vacationName.value = vacation.vacationName;
      vacationForm.destination.value = vacation.destination;
      vacationForm.dates.value = vacation.dates;
      vacations.splice(index, 1);
      renderVacations();
  }

  window.deleteVacation = function(index) {
      vacations.splice(index, 1);
      renderVacations();
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('visitorsChart').getContext('2d');
  const visitorsChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Paris', 'Bali', 'New York', 'Tokyo', 'Sydney'],
          datasets: [{
              label: 'Number of Visitors',
              data: [1200000, 800000, 1500000, 1000000, 900000],
              backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
              borderColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});
