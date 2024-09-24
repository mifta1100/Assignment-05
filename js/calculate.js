document.getElementById('button-card-1').addEventListener('click', function (event) {
    event.preventDefault();
    if (handleDonation('amount-card-1', 'totalDonateAmount-card-1', 'my-account', 'button-card-1', 'Flood at Noakhali, Bangladesh')) {
        toggleModal();
    }
});

document.getElementById('button-card-2').addEventListener('click', function (event) {
    event.preventDefault();
    if (handleDonation('amount-card-2', 'totalDonateAmount-card-2', 'my-account', 'button-card-2', 'Flood Relief in Feni, Bangladesh')) {
        toggleModal();
    }
});

document.getElementById('button-card-3').addEventListener('click', function (event) {
    event.preventDefault();
    if (handleDonation('amount-card-3', 'totalDonateAmount-card-3', 'my-account', 'button-card-3', 'Aid for Injured in Quota Movement')) {
        toggleModal();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('blogButton').addEventListener('click', function() {
        window.location.href = 'FAQ.html';
    });
});



document.getElementById('donationButton').addEventListener('click', function () {
    this.style.backgroundColor = '#B4F461';
    document.getElementById('historyButton').style.backgroundColor = '';

    // Hide history section and show donation section
    document.getElementById('historySection').classList.add('hidden');
    document.getElementById('donationSection').classList.remove('hidden');
});

document.getElementById('historyButton').addEventListener('click', function () {
    this.style.backgroundColor = '#B4F461';
    document.getElementById('donationButton').style.backgroundColor = '';

    // Hide donation section and show history section
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('historySection').classList.remove('hidden');
});








