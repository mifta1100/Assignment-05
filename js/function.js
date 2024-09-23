function handleDonation(donationInputId, totalDonateId, accountBalanceId, buttonId) {
    const donationAmount = document.getElementById(donationInputId).value;
    const totalDonate = document.getElementById(totalDonateId).innerText;
    const Account = document.getElementById(accountBalanceId).innerText;

    const myDonationAmount = parseFloat(donationAmount);

    
    if (isNaN(myDonationAmount)) {
        alert('Please enter a valid number!');
        return;
    }

    if (myDonationAmount <= 0) {
        alert('Please enter a positive donation amount!');
        return;
    }

    const totalDonateAmount = parseFloat(totalDonate);
    const myAccount = parseFloat(Account);

    const newBalance = myDonationAmount + totalDonateAmount;
    const currentBalance = myAccount - myDonationAmount;

    if (currentBalance < 0) {
        alert('Insufficient balance!');
        return;
    }

    document.getElementById(totalDonateId).innerText = newBalance + ' BDT';
    document.getElementById(accountBalanceId).innerText = currentBalance + ' BDT';
}


