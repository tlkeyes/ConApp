setChart3()
function setChart3(){
    new Chart(document.getElementById("bar-chart"), {
    type: 'horizontalBar',
    data: {
        labels: ["Unit1", "Unit2", "Unit3", "Unit4", "Unit5"],
        datasets: [
            {
                label: "stuff",
                backgroundColor: "#3e95cd",
                data: [2478,5267,734,784,433]
            }
        ]
    },
    options: {
        title: {
            display: false,
            text: "Some other metric"
        }
    }
    })
};