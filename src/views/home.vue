<template>
  <main>
    <div class="card-bg">
      <div class="card">
        <div class="card-front">
          <div class="detail">
            <figure class="logo">
              <img src="../assets/img/card-logo.svg" alt="card logo">
            </figure>
            <p class="code">{{ codeFormatter }}</p>
            <div class="divide">
              <p class="name">{{ form.name === '' ? 'Jane Appleseed': form.name }}</p>
              <p class="date">{{ form.month === '' ? 'MM' : form.month }}/{{ form.year === '' ? 'YY' : form.year }}</p>
            </div>
          </div>
          <img src="../assets/img/bg-card-front.png" alt="front card">
        </div>
        <div class="card-back">
          <span class="cvc">{{ form.cvc === '' ? '000' : form.cvc }}</span>
          <img src="../assets/img/bg-card-back.png" alt="back card">
        </div>
      </div>
    </div>
    <form class="form" @submit.prevent>
      <div class="row">
        <label class="title" for="name">cardholder name</label>
        <p>
          <input v-model="form.name" pattern="^[a-zA-Z\s]+$" class="bar" type="text" id="name" placeholder="e.g.Jane Appleseed" required>
        </p>
      </div>
      <div class="row">
        <label class="title" for="number">card number</label>
        <input v-model="form.code" maxlength="16" minlength="16" pattern="^\d{16}$" class="bar" type="tel" id="number" placeholder="e.g. 1234 5678 9123 0000" required>
      </div>
      <div>
        <p class="title">exp. date(<label for="mm">mm</label>/<label for="yy">yy</label>)</p>
        <p>
          <select v-model="form.month" class="select-bar bar" id="mm" required>
            <option value="" disabled selected>MM</option>
            <option v-for="month in months" :value="month">{{ month }}</option>
          </select>
          <select v-model="form.year" class="select-bar bar" id="yy" required>
            <option value="" disabled selected>YY</option>
            <option v-for="year in years" :value="year">{{ year }}</option>
          </select>
        </p>
      </div>
      <div>
        <label class="title" for="cvc">cvc</label>
        <input v-model="form.cvc" minlength="3" maxlength="3" class="bar" type="tel" id="cvc" placeholder="e.g.123" required pattern="^\d{3}$">
      </div>
      <div class="row">
        <button class="submit-btn" type="submit">Comfirm</button>
      </div>
    </form>
  </main>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { reactive } from 'vue'

const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
]

const years = [24, 25, 26, 27]

const form = reactive({
  code: '',
  name: 'James',
  month: '',
  year: '',
  cvc: ''
})

const codeFormatter = computed(() => {
  if (form.code === '') {
    return '0000 0000 0000 0000'
  } else {

  return `${form.code.slice(0, 4)} ${form.code.slice(4, 8)} ${form.code.slice(8, 12)} ${form.code.slice(12, 16)}`
  }
})

</script>

<style scoped>
.card-bg{
  background-image: linear-gradient(180deg, transparent 75%, var(--white) 75%), linear-gradient(var(--very-dark-violet-alpha), var(--very-dark-violet-alpha)), linear-gradient(45deg, var(--liner-from) , var(--liner-to));
}
.card {
  max-width: 500px;
  margin: auto;
  box-sizing: border-box;
  padding: 3rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
}
.card .card-front,
.card .card-back {
  border-radius: .5rem;
  overflow: hidden;
  box-shadow: var(--shadow);
  position: relative;
  color: var(--white);
}
.card .card-front img,
.card .card-back img {
  width: 100%;
  vertical-align: middle;
}
.card .card-front {
  grid-column: 1 / 5;
  grid-row: 3 / 6;
  z-index: 1;
}
.card .card-back {
  grid-column: 2 / 6;
  grid-row: 1 / 4;
}

.form {
  padding: 2rem 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.form .row {
  grid-column: 1 / -1;
}
.form .half {
  display: flex;
  align-items: center;
}
.title {
  display: block;
  text-transform: uppercase;
  color: var(--very-dark-violet);
  letter-spacing: 1px;
  line-height: 2;
}
.bar {
  width: 100%;
  box-sizing: border-box;
  padding: .8rem;
  font-size: var(--font-size);
  border-radius: .5rem;
  border: none;
  outline: 1px solid var(--light-grayish-violet);
  letter-spacing: 1px;
}
.select-bar {
  width: 45%;
}
.select-bar:last-child {
  margin-left: 10%;
}
.bar::placeholder {
  color: var(--light-grayish-violet);
  letter-spacing: 1px;
  font-weight: var(--font-weight);
}

.submit-btn {
  font-size: var(--font-size);
  border: none;
  padding: 0;
  color: var(--white);
  background-color: var(--very-dark-violet);
  width: 100%;
  padding: 1rem 0;
  border-radius: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
}

.detail {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1.2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.detail .logo {
  width: 4rem;
}
.detail .code {
  margin-top: auto;
  line-height: 3;
  font-size: var(--font-size);
  letter-spacing: 1px;
}
.detail .divide {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.detail .name,
.detail .date {
  font-size: 16px;
}
.cvc {
  position: absolute;
  top: 44%;
  right: 14%;
  font-size: 16px;
}
@media screen and (min-width: 1024px) {
  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-bg {
    width: 50%;
  }
  .form {
    margin: 0 2.5%;
    width: 45%;
  }
  .card-bg{
    min-height: 100svh;
    display: grid;
    place-items: center;
    background-image: linear-gradient(90deg, transparent 60%, var(--white) 60%), linear-gradient(var(--very-dark-violet-alpha), var(--very-dark-violet-alpha)), linear-gradient(45deg, var(--liner-from) , var(--liner-to));
  }
  .card {
    padding: 0 2rem;
    max-width: 100%;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }
  .card .card-front {
    grid-row: 1 / 5;
    z-index: 1;
  }
  .card .card-back {
    grid-row: 6 / 11;
  }
  .detail .code {
    font-size: 22px;
    letter-spacing: 4px;
  }
}
</style>