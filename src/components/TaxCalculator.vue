<template>
  <div id="tax-calculator">
    <h1>Tax Calculator</h1>
    <form @submit.prevent="calculateTax">
      <label for="income">Enter your income:</label>
      <input type="text" v-model="formattedIncome" @input="formatIncome" id="income" required>
      <button type="submit">Calculate</button>
    </form>
    <div v-if="tax !== null">
      <h2>Tax: €{{ formattedTax }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      income: null,
      tax: null,
      formattedIncome: ''
    };
  },
  methods: {
    calculateTax() {
      const TAX_BRACKETS = [
        { rate: 0.10, low: 0, high: 20550 },
        { rate: 0.12, low: 20551, high: 83550 },
        { rate: 0.22, low: 83551, high: 178150 },
        { rate: 0.24, low: 178151, high: 340100 },
        { rate: 0.32, low: 340101, high: 431900 },
        { rate: 0.35, low: 431901, high: 647850 },
        { rate: 0.37, low: 647851, high: Infinity }
      ];

      let tax = 0;
      for (const bracket of TAX_BRACKETS) {
        if (this.income > bracket.low) {
          tax += bracket.rate * (Math.min(this.income, bracket.high) - bracket.low);
        }
        if (this.income <= bracket.high) {
          break;
        }
      }
      this.tax = tax.toFixed(2);
    },
    formatIncome() {
      const value = this.formattedIncome.replace(/,/g, '');
      this.income = parseFloat(value);
      this.formattedIncome = new Intl.NumberFormat().format(value);
    }
  },
  computed: {
    formattedTax() {
      return new Intl.NumberFormat().format(this.tax);
    }
  }
};
</script>

<style scoped>
#tax-calculator {
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 5px;
  font-weight: normal;
}
input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
h1 {
  font-size: 24px;
}
</style>