var items = $('.results .item');
var amount;

$('select.filter').on('change', function() {

		var fltrProd = $('select#product-type');
		var fltrPlat = $('select#platform');

		var prodVal = fltrProd.val();
		var platVal = fltrPlat.val();

		if (prodVal == "0" && platVal == "0") {
				// show all items
				items.removeClass('hidden').addClass('visible');

		} else {
				// filter and show only items with selected values in data attr
				items.addClass('hidden').removeClass('visible');

				if (prodVal == "0" && platVal != "0") {
						$('.item[data-filter-platform="' + platVal + '"]').removeClass('hidden').addClass('visible');
				} else if (prodVal != "0" && platVal == "0") {
						$('.item[data-filter-product="' + prodVal + '"]').removeClass('hidden').addClass('visible');
				} else {
						$('.item[data-filter-platform="' + platVal + '"][data-filter-product="' + prodVal + '"]').removeClass('hidden').addClass('visible');
				}
				// console.log('prodVal:' + prodVal + ' platVal:' + platVal)
		}
});

//
// Sort with TinySort http://tinysort.sjeiti.com/
$('menu select#sort').on('change', function() {
		var sortVal = $(this).val();
		tinysort('.item', {
				order: 'asc',
				data: 'sort-' + sortVal
		});
});

//
// load more button
amountItems = $(".results .item:not(.hidden)").size();
x = 4;
$('.results .item:not(.hidden):lt(' + x + ')').show();
$('#showmore').on('click', function(e) {
		e.preventDefault();
		x = (x + 8 <= amountItems) ? x + 8 : amountItems;
		$('.results .item:not(.hidden):lt(' + x + ')').show();
});
$('#show-more').click(function() {
		x = (x - 8 < 0) ? 4 : x - 8;
		$('.results .item:not(.hidden)').not(':lt(' + x + ')').hide();
});