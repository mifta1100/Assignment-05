document.getElementById('button-card-1').addEventListener('click', function (event) {
    event.preventDefault();
    handleDonation('amount-card-1', 'totalDonateAmount-card-1', 'my-account', 'button-card-1');

    toggleModal();
});


document.getElementById('button-card-2').addEventListener('click', function (event) {
    event.preventDefault();
    handleDonation('amount-card-2', 'totalDonateAmount-card-2', 'my-account', 'button-card-2');

    toggleModal();
});


document.getElementById('button-card-3').addEventListener('click', function (event) {
    event.preventDefault();
    handleDonation('amount-card-3', 'totalDonateAmount-card-3', 'my-account', 'button-card-3');

    toggleModal();
});

function toggleModal() {
    const modal = document.getElementById('donationModal');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
}