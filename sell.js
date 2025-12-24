<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
const ctx = document.getElementById('yieldChart');
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Sold', 'Remaining'],
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#66bb6a','#c8e6c9']
        }]
    }
});
</script>
