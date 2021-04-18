export const accuracyTest = [
    [1618706630.7117698, 0, 0.8548277020454407],
    [1618707254.4700146, 1, 0.8533297181129456],
    [1618707854.1104727, 2, 0.8545553684234619], 
    [1618708430.7760158, 3, 0.8465204834938049],
    [1618709010.479732, 4, 0.8429797291755676],
    [1618709590.1492894, 5, 0.8308593034744263],
    [1618710163.1256, 6, 0.8511507511138916],
    [1618710731.7084632, 7, 0.844205379486084],
    [1618711302.9561872, 8, 0.8496527075767517],
    [1618711894.5855901, 9, 0.8436606526374817],
    [1618712486.0122082, 10, 0.8358981609344482],
    [1618713079.5322134, 11, 0.8437967896461487]
];

export const accuracyVal = [
    [1618706630.7117698, 0, 0.8548277020454407],
    [1618707254.4700146, 1, 0.8533297181129456],
    [1618707854.1104727, 2, 0.8545553684234619],
    [1618708430.7760158, 3, 0.8465204834938049],
    [1618709010.479732, 4, 0.8429797291755676],
    [1618709590.1492894, 5, 0.8308593034744263],
    [1618710163.1256, 6, 0.8511507511138916],
    [1618710731.7084632, 7, 0.844205379486084],
    [1618711302.9561872, 8, 0.8496527075767517],
    [1618711894.5855901, 9, 0.8436606526374817],
    [1618712486.0122082, 10, 0.8358981609344482],
    [1618713079.5322134, 11, 0.8437967896461487]
];

export const lossTrain = [
    [1618706529.8968253, 0, 0.40979909896850586],
    [1618707154.3540764, 1, 0.34878110885620117],
    [1618707761.844514, 2, 0.2945685088634491],
    [1618708338.220238, 3, 0.23720785975456238],
    [1618708916.6703503, 4, 0.18485243618488312],
    [1618709497.8937583, 5, 0.1394755244255066],
    [1618710070.7156467, 6, 0.09704823046922684],
    [1618710638.9841015, 7, 0.06631386280059814],
    [1618711209.4745796, 8, 0.04763827100396156],
    [1618711798.0444906, 9, 0.03105410560965538],
    [1618712389.3862836, 10, 0.019288698211312294],
    [1618712982.5028923, 11, 0.01639755442738533]
];

export const fscoreTest = [
    [1618706630.7117698, 0, 0.7079980373382568],
    [1618707254.4700146, 1, 0.6769198775291443],
    [1618707854.1104727, 2, 0.720742404460907],
    [1618708430.7760158, 3, 0.7034874558448792],
    [1618709010.4787304, 4, 0.7060199975967407],
    [1618709590.1492894, 5, 0.6890338063240051],
    [1618710163.1256, 6, 0.6920502185821533],
    [1618710731.707462, 7, 0.6971299648284912],
    [1618711302.9561872, 8, 0.6862773299217224],
    [1618711894.5845892, 9, 0.6879561543464661],
    [1618712486.0122082, 10, 0.6967571377754211],
    [1618713079.5322134, 11, 0.6918849349021912]
];

export const fscoreVal = [
    [1618706630.7117698, 0, 0.729172945022583],
    [1618707254.4690137, 1, 0.7204694151878357],
    [1618707854.1104727, 2, 0.7411648035049438],
    [1618708430.7760158, 3, 0.7224472165107727],
    [1618709010.4787304, 4, 0.7257623076438904],
    [1618709590.1492894, 5, 0.7059627175331116],
    [1618710163.1256, 6, 0.7199462652206421],
    [1618710731.707462, 7, 0.711340069770813],
    [1618711302.9561872, 8, 0.7009595632553101],
    [1618711894.5845892, 9, 0.6971225738525391],
    [1618712486.0122082, 10, 0.7098990082740784],
    [1618713079.5322134, 11, 0.7140617370605469]
];

export const generateChartData = (rawData) => {
    const labels = rawData.map((dataPoint) => dataPoint[1]);
    const points = rawData.map((dataPoint) => dataPoint[2]);
    return {labels, points};
};

export const combinedGraphs = [
    {title: "Accuracy vs Epochs (Test Data)", data: generateChartData(accuracyTest), ymin: 0.84, ymax: 0.86},
    {title: "Accuracy vs Epochs (Val Data)", data: generateChartData(accuracyVal), ymin: 0.85, ymax: 0.865},
    {title: "Loss vs Epochs (Train Data)", data: generateChartData(lossTrain), ymin: 0.15, ymax: 0.4},
    {title: "fScore vs Epochs (Test Data)", data: generateChartData(fscoreTest), ymin: 0.69, ymax: 0.705},
    {title: "fScore vs Epochs (Val Data)", data: generateChartData(fscoreVal), ymin: 0.715, ymax: 0.730}
];