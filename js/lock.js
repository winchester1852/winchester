// ყველა კლიტის დამუშავება
document.querySelectorAll('img[class^="lock_a"][class$="e"]').forEach(lockImg => {
  lockImg.dataset.status = 'free'; // საწყისი სტატუსი

  // საწყისი კლიტე
  lockImg.src = 'img/ABimages/lock_a163g.png';

  // დაჭერისას კლიტის შეცვლა
  lockImg.addEventListener('click', (e) => {
    e.stopPropagation(); // hover ან სხვა ეფექტზე გავლენა არ ქონდეს

    const status = lockImg.dataset.status;

    if (status === 'free') {
      lockImg.src = 'img/ABimages/lock_a163e.png'; // ყვითელი
      lockImg.dataset.status = 'reserved';

     Swal.fire({
  icon: 'success',
  title: 'ბინა წარმატებით დაიჯავშნა 48 საათის განმავლობაში',
  html: '<span class="custom-text">შესაძენად დაგვიკავშირდით ცხელ ხაზზე.</span>',
  timer: 3000,
  showConfirmButton: false,
  customClass: {
    popup: 'custom-popup',   // ფონური ფერის შეცვლა
    title: 'custom-title',   // სათაურის ფერის შეცვლა
  }
});

    } else if (status === 'reserved') {
      lockImg.src = 'img/ABimages/lock_a163g.png'; // მწვანე
      lockImg.dataset.status = 'free';

      Swal.fire({
  icon: 'info',
  title: 'ბინა თავისუფალია',
  html: '<span class="custom-text">თქვენ გააუქმეთ ჯავშანი.</span>',
  timer: 3000,
  showConfirmButton: false,
  customClass: {
    popup: 'custom-popup',   // ფონური ფერის შეცვლა
    title: 'custom-title',   // სათაურის ფერის შეცვლა
  }
});
    }
  });
});
