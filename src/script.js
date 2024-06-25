document.addEventListener('DOMContentLoaded', () => {
  const nextButtons = document.querySelectorAll('.next');
  const backButtons = document.querySelectorAll('.back');
  const steps = document.querySelectorAll('.step');
  const stepIndicators = document.querySelectorAll('.step-number');
  const confirmationStep = document.querySelector('.confirmation-message');

  let currentStep = 0;

  // Função para atualizar o passo atual
  function updateStepIndicator(step) {
    stepIndicators.forEach((indicator, index) => {
      if (index === step) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  // Função para validar o passo atual
  function validateStep(step) {
    const inputs = steps[step].querySelectorAll('input, textarea');
    for (const input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    return true;
  }

  // Função para avançar para o próximo passo
  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        steps[currentStep].classList.remove('step-active');
        currentStep++;
        steps[currentStep].classList.add('step-active');
        updateStepIndicator(currentStep);
      }
    });
  });

  // Função para voltar ao passo anterior
  backButtons.forEach(button => {
    button.addEventListener('click', () => {
      steps[currentStep].classList.remove('step-active');
      currentStep--;
      steps[currentStep].classList.add('step-active');
      updateStepIndicator(currentStep);
    });
  });

  // Manipulação do formulário após a submissão (simulação)
  const form = document.getElementById('multi-step-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Simulação de submissão bem-sucedida
    // Após confirmar, mostrar a imagem de confirmação e mensagem de agradecimento
    steps[currentStep].classList.remove('step-active');
    confirmationStep.classList.remove('hidden');
    confirmationStep.classList.add('step-active');
    updateStepIndicator(currentStep);
  });

  // Inicialização do indicador de passos
  updateStepIndicator(currentStep);
});
