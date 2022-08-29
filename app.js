// https://www.omnicalculator.com/chemistry/activation-energy#activation-energy-equation
// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const activationenergyRadio = document.getElementById('activationenergyRadio');
const temperatureRadio = document.getElementById('temperatureRadio');
const ratecoefficientRadio = document.getElementById('ratecoefficientRadio');
const constantRadio = document.getElementById('constantRadio');

let activationenergy;
const R = 8.314;
let temperature = v1;
let ratecoefficient = v2;
let constant = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

activationenergyRadio.addEventListener('click', function() {
  variable1.textContent = 'Temperature';
  variable2.textContent = 'Rate coefficient';
  variable3.textContent = 'Constant';
  temperature = v1;
  ratecoefficient = v2;
  constant = v3;
  result.textContent = '';
});

temperatureRadio.addEventListener('click', function() {
  variable1.textContent = 'Activation energy';
  variable2.textContent = 'Rate coefficient';
  variable3.textContent = 'Constant';
  activationenergy = v1;
  ratecoefficient = v2;
  constant = v3;
  result.textContent = '';
});

ratecoefficientRadio.addEventListener('click', function() {
  variable1.textContent = 'Activation energy';
  variable2.textContent = 'Temperature';
  variable3.textContent = 'Constant';
  activationenergy = v1;
  temperature = v2;
  constant = v3;
  result.textContent = '';
});

constantRadio.addEventListener('click', function() {
  variable1.textContent = 'Activation energy';
  variable2.textContent = 'Temperature';
  variable3.textContent = 'Rate coefficient';
  activationenergy = v1;
  temperature = v2;
  ratecoefficient = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(activationenergyRadio.checked)
    result.textContent = `Activation energy = ${computeActivationenergy().toFixed(2)}`;

  else if(temperatureRadio.checked)
    result.textContent = `Temperature = ${computeTemperature().toFixed(2)}`;

  else if(ratecoefficientRadio.checked)
    result.textContent = `Rate coefficient = ${computeRatecoefficient().toFixed(2)}`;

  else if(constantRadio.checked)
    result.textContent = `Constant = ${computeConstant().toFixed(2)}`;
})

// calculation

function computeActivationenergy() {
  return -R * Number(temperature.value) * Math.log1p(Number(ratecoefficient.value) / Number(constant.value));
}

function computeTemperature() {
  return (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value)) + Number(salvageValue.value);
}

function computeRatecoefficient() {
  return Number(assetValue.value) - (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value));
}

function computeConstant() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}