// Get the number of logical processors
const logicalProcessors = navigator.hardwareConcurrency;
console.log(`Your CPU has ${logicalProcessors} logical processors (threads).`);

// Function to create and run Web Workers for CPU stress test
function cpuStressTest() {
    const logicalProcessors = navigator.hardwareConcurrency;
    console.log(`Starting stress test with ${logicalProcessors} workers...`);

    for (let i = 0; i < logicalProcessors; i++) {
        const workerScript = `
            self.onmessage = function() {
                let start = Date.now();
                while (Date.now() - start < 10000) { // Run for 10 seconds
                    // Perform CPU intensive task
                    Math.sqrt(Math.random());
                }
                self.postMessage('done');
            }
        `;

        const blob = new Blob([workerScript], {
            type: "application/javascript",
        });
        const worker = new Worker(URL.createObjectURL(blob));

        worker.onmessage = function (e) {
            console.log(`Worker ${i + 1} done: `, e.data);
        };

        worker.postMessage("start");
    }
}

// Start the CPU stress test
cpuStressTest();
