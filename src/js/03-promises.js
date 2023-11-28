import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.target.elements;

  let countDelay = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, delay_count)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    countDelay += Number(step.value);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const resolvePromise = Math.random() > 0.3;

    setTimeout(() => {
      if (resolvePromise) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

