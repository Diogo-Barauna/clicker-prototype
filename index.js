function Game(){
    this.clickDisplay = document.querySelector('.clicks');
    this.upgradeBtn1 = document.querySelector('.multUpgrade')
    this.multUpValueDisplay = document.querySelector('.multUpValue')
    this.multDisplay = document.querySelector('.multDisplay')
    this.upgradeBtn2 = document.querySelector('.autoClickUpgrade')
    this.autoClickValueDisplay = document.querySelector('.autoClickValue')
    this.autoClickMultDisplay = document.querySelector('.autoClickMultDisplay')
  

    let multiplier = 1
    let clickCount = 0
    let multUpValue = 20;
    let autoClickValue = 50;
    let autoClickMultiplier = 0;

    
    this.Start = _ =>{
        this.click();
        this.upgradesBlock();
        this.displayData();
    };

    this.clickAdd = _ => {
        clickCount += 1 * multiplier;
        this.clickDisplay.innerHTML = clickCount;
    };

    this.upgradesBlock = _ =>{
        setInterval(() =>{
            clickCount < multUpValue ? this.upgradeBtn1.disabled = true : this.upgradeBtn1.disabled = false
            clickCount < autoClickValue ? this.upgradeBtn2.disabled = true : this.upgradeBtn2.disabled = false
        })
    }

    this.displayData = _ => {
        setInterval(()=>{
            this.clickDisplay.innerHTML = clickCount;
            this.autoClickMultDisplay.innerHTML = autoClickMultiplier + ' p/s';
            this.multDisplay.innerHTML = multiplier + 'x';
        })
    }

    this.multUpgrade = _ => {
        clickCount -= multUpValue
        multUpValue += 50
        multiplier += 1
        this.multUpValueDisplay.innerHTML = multUpValue;
        
    }

    this.autoClickUpgrade = _ => {
        clickCount -= autoClickValue;
        autoClickValue += 70
        autoClickMultiplier += 1;
        this.autoClickValueDisplay.innerHTML = autoClickValue;
    };
    setInterval(() => {   
        clickCount += autoClickMultiplier;
    },1000)

    this.click = _ => {
        document.addEventListener('click',e =>{
            const el = e.target;
            if (el.classList.contains('target')) this.clickAdd();
            if (el.classList.contains('multUpgrade')) this.multUpgrade();
            if (el.classList.contains('autoClickUpgrade')) this.autoClickUpgrade();
            this.upgradesBlock();
            
        })
    };
    
    this.multUpValueDisplay.innerHTML = multUpValue;
    this.autoClickValueDisplay.innerHTML = autoClickValue;

    

    
};
const clickerGame = new Game
clickerGame.Start()

