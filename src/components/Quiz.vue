<template>
    <section>
        <pre>{{ JSON.stringify(questions, null, 2) }}</pre>
    </section>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
        position: 0,
        answers: {
            type: Array,
        },
        started: false,
        responses: Array(this.answers).fill(false),
        isSelected: Boolean
    };
  },
  methods: {
    moveForward(event) {
        event.preventDefault();
        if (this.started === false){
            this.started = true;
            return;
        }

        if (!this.validation()) {
            this.isSelected = false;
            return;
        }

        this.position++;
    },
    submitForm() {
        // Do something here once user is done 
        // can post to a url, api, or service
        console.log(this.responses);
        console.log('Submit function executed');
        return;
    },
    validate() {
        this.isSelected = true;
    },
    validation() {
        if (!this.responses[this.position]) {
            this.isSelected = false;
            setTimeout(()=>{this.isSelected = true},1000);
            return false;
        }
        this.isSelected = true;
        return true;
    }
  }
};
</script>

<style scoped>
.answersWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}

article {
    width: 95vw;
    max-height: 75vh;
    overflow: auto;
    border: 3px solid #4fc08d;
    padding: 25px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #9c9c9c;
    transition: border .5s linear;
}

button {
    padding: 10px 20px 10px 20px;
    font-size: 1.3rem;
    margin: 0;
    border: 3px solid #4fc08d;
    background-color: #34495e;
    border-radius: 10px;
    color: white;
}

.endCard {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
}

input {
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
    border: 3px solid green;
}

.questions {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.questionsButton {
    align-self: flex-end;
}

.danceButton {
    animation: danceButton .2s linear 0s infinite;
    align-self: flex-end;
}

.jumpButton {
    animation: jumpButton 1s ease-in-out 0s infinite;
    align-self: flex-end;
}

.reviewWrapper {
    display: block;
}

.noInput {
    border: 3px solid red;
    animation: shake 1s ease-in-out 0s 1;
}

button:hover {
    background-color: #465b70;
}

.welcomeCard {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

@keyframes danceButton {
    0% { transform: rotate(0deg) }
    25% { transform: rotate(1deg) }
    50% { transform: rotate(-1deg) }
    100% { transform: rotate(0deg) }
}

@keyframes jumpButton {
    0% { transform: translateY(0px) }
    10% { transform: translateY(-1px) }
    20% { transform: translateY(-2px) }
    30% { transform: translateY(-1px) }
    40% { transform: translateY(0px) }
    50% { transform: translateY(-1px) }
    60% { transform: translateY(-2px) }
    70% { transform: translateY(-1px) }
    80% { transform: translateY(0px) }
    90% { transform: translateY(1px) }
    100% { transform: translateY(0px) }
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0) }
  
  20%, 80% { transform: translate3d(2px, 0, 0) }

  30%, 50%, 70% { transform: translate3d(-4px, 0, 0) }

  40%, 60% { transform: translate3d(4px, 0, 0) }
}

h1 {
    font-size: 1.8rem;
    padding: 0;
    margin: 0;
    margin: .5rem;
}
h2 {
    font-size: 1.3rem;
    padding: 0;
    margin: 0;
    margin: .5rem;
} 
h3 {
    font-size: 1.2rem;
    padding: 0;
    margin: .5rem;
}
h4 {
    font-size: 1.1rem;
    padding: 0;
    margin: .5rem;
}
h5 {
    font-size: .9rem;
    padding: 0;
    margin: .5rem;
}
</style>