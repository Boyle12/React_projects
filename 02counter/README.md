# 📁 Project 02: Counter Application (State Lifecycle Lab)

This module focuses on understanding component UI reactions, performance rendering loops, and breaking out of React's automatic batching mechanisms.

## 🧠 Key Technical Insights

### 1. The Core Purpose of State
In vanilla JavaScript, updating a variable doesn't update the UI automatically. React introduces `useState` as a reactive mechanism. Any structural modification scheduled inside this hook triggers a component re-render pass across the virtual layout framework.

### 2. Deep Dive: State Batching Mechanics
When multiple sequential layout state modification queues are called synchronously inside a single event loop:
```javascript
setCounter(counter + 1);
setCounter(counter + 1);
