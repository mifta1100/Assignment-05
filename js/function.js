function handleDonation(donationInputId, totalDonateId, accountBalanceId, buttonId) {
    const donationAmount = document.getElementById(donationInputId).value;
    const totalDonate = document.getElementById(totalDonateId).innerText;
    const Account = document.getElementById(accountBalanceId).innerText;

    const myDonationAmount = parseFloat(donationAmount);

    if (isNaN(myDonationAmount)) {
        alert('Please enter a valid number!');
        return false; 
    }

    if (myDonationAmount <= 0) {
        alert('Please enter a positive donation amount!');
        return false;  
    }

    const totalDonateAmount = parseFloat(totalDonate);
    const myAccount = parseFloat(Account);

    const newBalance = myDonationAmount + totalDonateAmount;
    const currentBalance = myAccount - myDonationAmount;

    if (currentBalance < 0) {
        alert('Insufficient balance!');
        return false;  
    }

    
    document.getElementById(totalDonateId).innerText = newBalance + ' BDT';
    document.getElementById(accountBalanceId).innerText = currentBalance + ' BDT';

    
    document.getElementById(donationInputId).value = '';

    return true; 
}


function toggleModal() {
    const modal = document.getElementById('donationModal');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
}
