const get = (element) => document.getElementById(element); // argument is the element's id

class App {
  constructor() {
    // our state is text and result
    this.text;
    this.result;
    this.render();
  }

  render() {
    get('root').innerHTML = `
        <div class="container-md">
            <div class="row justify-content-center">
                <h1>
                    Is it a Palindrome?
                </h1>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">
                            Enter in text to check for a palindrome:
                        </h4>
                        <div class="input-container">
                            <input id="text-input" />
                            <button id="check-btn" class="btn btn-primary">Check</button>
                        </div>
                        <p id="result"></p>
                    </div>
                </div>
            </div>
        </div>
        `;
        const button = get('check-btn');
        button.addEventListener('click',  () => {
            const text = get('text-input').value;
            const value = text.toLowerCase().replace(/[^0-9a-z]/gi, '')
            if (text) {
                this.text = value.split('').reverse().join('');
                const isPalindrome = value === this.text;
                this.result = isPalindrome ? `<b>${text}</b>` + ' ' + 'is a palindrome' : text + ' ' + `is <b>NOT</b> a palindrome`;
                get('result').innerHTML = this.result;
            } else {
                alert('Please input a value');
            }
        
        
          });
  }
  

}

new App();
