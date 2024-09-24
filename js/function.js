function handleDonation(donationInputId, totalDonateId, accountBalanceId, buttonId, causeName) {
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

    addToHistory(myDonationAmount, causeName);

    return true;
}


function addToHistory(amount, causeName) {
    const historySection = document.getElementById('historySection');

    const currentDate = new Date();
    const donationTime = currentDate.toString();


    const historyEntry = document.createElement('div');
    historyEntry.classList.add('border', 'w-1/2', 'text-center', 'rounded-2xl', 'p-5');


    historyEntry.innerHTML = `
    <div class="flex flex-col justify-center items-center w-full text-center space-y-4">
        <h1 class="font-bold text-xl">
            <span>${amount}</span> Taka is donated for <span>${causeName}</span>
        </h1>
        <p class="font-semibold text-[16px] text-gray-500">
            Date: ${donationTime}
        </p>
    </div>
`;

    historySection.appendChild(historyEntry);
}


function toggleModal() {
    const modal = document.getElementById('donationModal');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
}


