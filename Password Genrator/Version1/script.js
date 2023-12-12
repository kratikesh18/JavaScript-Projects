// one lowercase  one uppercase one special characher
// genrate stong apssword
//genrate weak password
//genrate verystrong password
//genrate funny password

const passwordContainer =
  document.getElementsByClassName("password-container")[0];

let rangelength = document.getElementById("pass-length");

let pValue = document.getElementById("len");

let lenghtOfPass = 6;
pValue.textContent = rangelength.value;

rangelength.addEventListener("input", (e) => {
  pValue.textContent = e.target.value;
  lenghtOfPass = pValue.textContent;
});

const genrateBtn1 = document.getElementsByClassName("genrate-strong")[0];
const genrateBtn2 = document.getElementsByClassName("genrate-letters")[0];

const showPass = document.getElementById("show-password");
const resetBtn = document.getElementById("reset-btn");

let chars = "abcdefghijklmnopqrstuvwxyz";
let nums = "1234567890";
let symbols = "!@&%";
let funnyNouns = ['Pussy', 'Dick', 'Hardy', "Boobie", 'Bitch', 'Protection', "Ass", "Mistake", 'Fat', "Pookie", "Vibrator"]
let funnyAdj = ['Wet', 'Hard', 'Loosy', "ButtChicks", 'Pig', 'Unprotected', "Juicy", "Huge", 'Skinny', "Beauty", "Tiny"]

class Password {
  constructor() {
    this.password = "";
  }

  genratePassword(len) {
    let i = 0;
    while (i < len) {
      let new_Char = chars[Math.floor(Math.random() * chars.length)];
      if (this.password.endsWith(new_Char)) {
        continue;
      } else {
        this.password += new_Char;
      }

      i++;
    }

    return this.password;
  }

  genrateStrongPassword() {
    let i = 0;
    while (i < len) {
      let new_Char1 = chars[Math.floor(Math.random() * chars.length)];
      let new_Char2 = symbols[Math.floor(Math.random() * symbols.length)];

      let new_Char3 = nums[Math.floor(Math.random() * nums.length)];
      if (
        !this.password.includes(new_Char1) &&
        !this.password.includes(new_Char2) &&
        !this.password.includes(new_Char3)
      ) {
        if (i == (Math.floor(Math.random() * 12))) {

          this.password += new_Char1.toUpperCase();
        } else {

          this.password += new_Char1;
          this.password += new_Char2;
          this.password += new_Char3;
        }
      } else {
        continue;
      }

      i += 3;
      // i++;
    }

    return this.password;
  }

  resetPass() {
    this.password = "";
  }

  genrateFunnyPass() {
    let i = 0;
    while (i < 1) {
      let funNoun = funnyNouns[Math.floor(Math.random() * funnyNouns.length)];
      let funAdj = funnyAdj[Math.floor(Math.random() * funnyAdj.length)];

      let new_Char3 = nums[Math.floor(Math.random() * nums.length)];
      if (!this.password.includes(funNoun) && !this.password.includes(funAdj)) {

        this.password += funAdj;
        this.password += funNoun;
        this.password += Math.floor(Math.random() * 100)
      }
      else {
        continue;
      }
      i++;
    }

    // i++;
    return this.password;
  }

}



let passConsumer = new Password();

genrateBtn1.addEventListener("click", () => {
  //   showPass.value = passConsumer.genratePassword(lenghtOfPass);

  let passToShow = passConsumer
    .genrateStrongPassword(lenghtOfPass)
    .substring(0, lenghtOfPass);
  showPass.value = passToShow;
});
genrateBtn2.addEventListener("click", () => {
  let passToShow = passConsumer
    .genrateFunnyPass()

  showPass.value = passToShow;
});

resetBtn.addEventListener("click", () => {
  passConsumer.resetPass();
  showPass.value = " ";
});
