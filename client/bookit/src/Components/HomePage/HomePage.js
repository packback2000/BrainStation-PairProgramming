import React from "react";
import BookListPage from "../BookListPage/BookListPage";
import "../../styles/styles.css"
import "../../styles/DarkMode.css";
import Pricing from "../Pricing/Pricing";
import Rating from "../Pricing/Rating";
import priceInput from "../Pricing/Pricing";
import rateInput from "../Pricing/Rating";
import axios from "axios";

let books = [
   {"rank":1,"rank_last_week":1,"weeks_on_list":2,"asterisk":0,"dagger":0,"primary_isbn10":"0063003058","primary_isbn13":"9780063003057","publisher":"Morrow","description":"Jess has suspicions about her half-brother\u2019s neighbors when he goes missing.","price":"0.00","title":"THE PARIS APARTMENT","author":"Lucy Foley","contributor":"by Lucy Foley","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780063003057.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/0063003058?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0063003058","isbn13":"9780063003057"},{"isbn10":"0063003082","isbn13":"9780063003088"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/0063003058?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9780063003057?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063003057"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BPARIS%252BAPARTMENT%252FLucy%252BFoley%252F9780063003057&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BPARIS%252BAPARTMENT%252BLucy%252BFoley"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063003057&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BPARIS%2BAPARTMENT"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063003057%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BPARIS%2BAPARTMENT%2BLucy%2BFoley%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/ef0030b7-5eca-5278-835a-ade95bfbb1f2"},{"rank":2,"rank_last_week":0,"weeks_on_list":1,"asterisk":0,"dagger":0,"primary_isbn10":"1982166797","primary_isbn13":"9781982166793","publisher":"Atria","description":"During a summer trip in Italy, Katy\u2019s late mother reappears as a 30-year-old woman.","price":"0.00","title":"ONE ITALIAN SUMMER","author":"Rebecca Serle","contributor":"by Rebecca Serle","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781982166793.jpg","book_image_width":324,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/1982166797?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1982166797","isbn13":"9781982166793"},{"isbn10":"1982166819","isbn13":"9781982166816"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/1982166797?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9781982166793?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982166793"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FONE%252BITALIAN%252BSUMMER%252FRebecca%252BSerle%252F9781982166793&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DONE%252BITALIAN%252BSUMMER%252BRebecca%252BSerle"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781982166793&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DONE%2BITALIAN%2BSUMMER"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781982166793%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DONE%2BITALIAN%2BSUMMER%2BRebecca%2BSerle%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/5e998df9-4354-56be-9e67-86e560cf8f96"},{"rank":3,"rank_last_week":0,"weeks_on_list":1,"asterisk":0,"dagger":0,"primary_isbn10":"1250854512","primary_isbn13":"9781250854513","publisher":"Tor","description":"Atlas Blakely recruits six candidates to fight for five spots in a secret society of magical academicians.","price":"0.00","title":"THE ATLAS SIX","author":"Olivie Blake","contributor":"by Olivie Blake","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781250854513.jpg","book_image_width":329,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/1250854512?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1250854512","isbn13":"9781250854513"},{"isbn10":"1250854555","isbn13":"9781250854551"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/1250854512?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9781250854513?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250854513"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BATLAS%252BSIX%252FOlivie%252BBlake%252F9781250854513&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BATLAS%252BSIX%252BOlivie%252BBlake"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250854513&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BATLAS%2BSIX"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250854513%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BATLAS%2BSIX%2BOlivie%2BBlake%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/1d0cae7e-eddf-5c5b-9a49-e535cfd6601f"},{"rank":4,"rank_last_week":2,"weeks_on_list":3,"asterisk":0,"dagger":0,"primary_isbn10":"1635574072","primary_isbn13":"9781635574074","publisher":"Bloomsbury","description":"The second book in the Crescent City series. Bryce Quinlan and Hunt Athalar must choose to fight or stay silent.","price":"0.00","title":"HOUSE OF SKY AND BREATH","author":"Sarah J. Maas","contributor":"by Sarah J. Maas","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781635574074.jpg","book_image_width":326,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/1635574072?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1635574072","isbn13":"9781635574074"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/1635574072?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9781635574074?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781635574074"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FHOUSE%252BOF%252BSKY%252BAND%252BBREATH%252FSarah%252BJ.%252BMaas%252F9781635574074&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DHOUSE%252BOF%252BSKY%252BAND%252BBREATH%252BSarah%252BJ.%252BMaas"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781635574074&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DHOUSE%2BOF%2BSKY%2BAND%2BBREATH"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781635574074%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DHOUSE%2BOF%2BSKY%2BAND%2BBREATH%2BSarah%2BJ.%2BMaas%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/5cf5dc9a-a109-5bfc-ab01-28817324a757"},{"rank":5,"rank_last_week":0,"weeks_on_list":1,"asterisk":0,"dagger":0,"primary_isbn10":"0062997424","primary_isbn13":"9780062997425","publisher":"Harper","description":"Off the English coast, the body count rises at a celebrity members\u2019 club.","price":"0.00","title":"THE CLUB","author":"Ellery Lloyd","contributor":"by Ellery Lloyd","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780062997425.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/0062997424?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0062997424","isbn13":"9780062997425"},{"isbn10":"0062997440","isbn13":"9780062997449"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/0062997424?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9780062997425?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062997425"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCLUB%252FEllery%252BLloyd%252F9780062997425&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCLUB%252BEllery%252BLloyd"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062997425&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BCLUB"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062997425%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCLUB%2BEllery%2BLloyd%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/84a596a9-9c43-58e9-a793-6f8b815d079e"},{"rank":6,"rank_last_week":3,"weeks_on_list":65,"asterisk":0,"dagger":0,"primary_isbn10":"0525559477","primary_isbn13":"9780525559474","publisher":"Viking","description":"Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.","price":"0.00","title":"THE MIDNIGHT LIBRARY","author":"Matt Haig","contributor":"by Matt Haig","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780525559474.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/0525559477?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0525559477","isbn13":"9780525559474"},{"isbn10":"0525559485","isbn13":"9780525559481"},{"isbn10":"0655697071","isbn13":"9780655697077"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/0525559477?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9780525559474?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780525559474"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BMIDNIGHT%252BLIBRARY%252FMatt%252BHaig%252F9780525559474&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BMIDNIGHT%252BLIBRARY%252BMatt%252BHaig"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780525559474&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BMIDNIGHT%2BLIBRARY"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780525559474%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BMIDNIGHT%2BLIBRARY%2BMatt%2BHaig%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/60d0ee2d-3d05-50c9-a484-050d17a2308e"},{"rank":7,"rank_last_week":5,"weeks_on_list":9,"asterisk":0,"dagger":0,"primary_isbn10":"0593356152","primary_isbn13":"9780593356159","publisher":"Ballantine","description":"When a wealthy man is found dead in his room, a maid at the Regency Grand Hotel becomes a lead suspect.","price":"0.00","title":"THE MAID","author":"Nita Prose","contributor":"by Nita Prose","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780593356159.jpg","book_image_width":329,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/0593356152?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0593356152","isbn13":"9780593356159"},{"isbn10":"0593356160","isbn13":"9780593356166"},{"isbn10":"0593452682","isbn13":"9780593452684"},{"isbn10":"0593510844","isbn13":"9780593510841"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/0593356152?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9780593356159?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593356159"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BMAID%252FNita%252BProse%252F9780593356159&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BMAID%252BNita%252BProse"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593356159&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BMAID"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593356159%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BMAID%2BNita%2BProse%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/3177f07a-ea44-50d8-a0fd-e3d56450c995"},{"rank":8,"rank_last_week":4,"weeks_on_list":22,"asterisk":0,"dagger":0,"primary_isbn10":"0735222355","primary_isbn13":"9780735222359","publisher":"Viking","description":"Two friends who escaped from a juvenile work farm take Emmett Watson on an unexpected journey to New York City in 1954.","price":"0.00","title":"THE LINCOLN HIGHWAY","author":"Amor Towles","contributor":"by Amor Towles","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780735222359.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/0735222355?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0735222355","isbn13":"9780735222359"},{"isbn10":"0735222371","isbn13":"9780735222373"},{"isbn10":"0593452100","isbn13":"9780593452103"},{"isbn10":"0593452097","isbn13":"9780593452097"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/0735222355?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9780735222359?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735222359"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLINCOLN%252BHIGHWAY%252FAmor%252BTowles%252F9780735222359&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLINCOLN%252BHIGHWAY%252BAmor%252BTowles"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735222359&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLINCOLN%2BHIGHWAY"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735222359%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLINCOLN%2BHIGHWAY%2BAmor%2BTowles%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/43839b1f-c8cc-5ef4-8893-bd85582906a4"},{"rank":9,"rank_last_week":6,"weeks_on_list":42,"asterisk":0,"dagger":0,"primary_isbn10":"1501171348","primary_isbn13":"9781501171345","publisher":"Simon & Schuster","description":"Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship.","price":"0.00","title":"THE LAST THING HE TOLD ME","author":"Laura Dave","contributor":"by Laura Dave","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781501171345.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/1501171348?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1501171348","isbn13":"9781501171345"},{"isbn10":"1501171364","isbn13":"9781501171369"},{"isbn10":"1797124749","isbn13":"9781797124742"},{"isbn10":"1638080992","isbn13":"9781638080992"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/1501171348?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9781501171345?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501171345"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLAST%252BTHING%252BHE%252BTOLD%252BME%252FLaura%252BDave%252F9781501171345&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLAST%252BTHING%252BHE%252BTOLD%252BME%252BLaura%252BDave"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501171345&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLAST%2BTHING%2BHE%2BTOLD%2BME"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501171345%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLAST%2BTHING%2BHE%2BTOLD%2BME%2BLaura%2BDave%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/b38ae769-e873-5272-bb5a-c58a35162db1"},{"rank":10,"rank_last_week":0,"weeks_on_list":1,"asterisk":0,"dagger":0,"primary_isbn10":"0593296990","primary_isbn13":"9780593296998","publisher":"Pamela Dorman","description":"When a marine biologist suffers a serious illness, she must tell her husband about the other love of her life.","price":"0.00","title":"THE LOVE OF MY LIFE","author":"Rosie Walsh","contributor":"by Rosie Walsh","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780593296998.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/0593296990?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0593296990","isbn13":"9780593296998"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/0593296990?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9780593296998?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593296998"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BOF%252BMY%252BLIFE%252FRosie%252BWalsh%252F9780593296998&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BOF%252BMY%252BLIFE%252BRosie%252BWalsh"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593296998&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BOF%2BMY%2BLIFE"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593296998%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BOF%2BMY%2BLIFE%2BRosie%2BWalsh%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/691edef2-7be0-5696-b311-d3dbc05a66dd"},{"rank":11,"rank_last_week":8,"weeks_on_list":5,"asterisk":0,"dagger":0,"primary_isbn10":"1250274613","primary_isbn13":"9781250274618","publisher":"St. Martin's","description":"Miss Nan O\u2019Dea becomes the mistress of Agatha Christie\u2019s husband.","price":"0.00","title":"THE CHRISTIE AFFAIR","author":"Nina de Gramont","contributor":"by Nina de Gramont","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781250274618.jpg","book_image_width":329,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/1250274613?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1250274613","isbn13":"9781250274618"},{"isbn10":"1250274621","isbn13":"9781250274625"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/1250274613?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9781250274618?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250274618"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCHRISTIE%252BAFFAIR%252FNina%252Bde%252BGramont%252F9781250274618&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCHRISTIE%252BAFFAIR%252BNina%252Bde%252BGramont"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250274618&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BCHRISTIE%2BAFFAIR"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250274618%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCHRISTIE%2BAFFAIR%2BNina%2Bde%2BGramont%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/80db233d-c217-5c4f-abde-bfb3f2076dac"},{"rank":12,"rank_last_week":10,"weeks_on_list":18,"asterisk":0,"dagger":0,"primary_isbn10":"006288834X","primary_isbn13":"9780062888341","publisher":"Harper","description":"After a ship explodes, 10 people struggling to survive pull a man who claims to be the Lord out of the sea.","price":"0.00","title":"THE STRANGER IN THE LIFEBOAT","author":"Mitch Albom","contributor":"by Mitch Albom","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780062888341.jpg","book_image_width":345,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/006288834X?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"006288834X","isbn13":"9780062888341"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/006288834X?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9780062888341?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062888341"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSTRANGER%252BIN%252BTHE%252BLIFEBOAT%252FMitch%252BAlbom%252F9780062888341&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSTRANGER%252BIN%252BTHE%252BLIFEBOAT%252BMitch%252BAlbom"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062888341&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BSTRANGER%2BIN%2BTHE%2BLIFEBOAT"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062888341%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSTRANGER%2BIN%2BTHE%2BLIFEBOAT%2BMitch%2BAlbom%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/bd831017-3ff8-51b6-bbb5-0e4b7d43f62d"},{"rank":13,"rank_last_week":9,"weeks_on_list":4,"asterisk":0,"dagger":0,"primary_isbn10":"125027821X","primary_isbn13":"9781250278210","publisher":"St. Martin's","description":"The 54th book of the In Death series. Eve Dallas investigates a homicide and the disappearance of other women who resemble that victim.","price":"0.00","title":"ABANDONED IN DEATH","author":"J.D. Robb","contributor":"by J.D. Robb","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781250278210.jpg","book_image_width":338,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/125027821X?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"125027821X","isbn13":"9781250278210"},{"isbn10":"1250278228","isbn13":"9781250278227"},{"isbn10":"1250835488","isbn13":"9781250835482"},{"isbn10":"1432895354","isbn13":"9781432895358"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/125027821X?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9781250278210?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250278210"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FABANDONED%252BIN%252BDEATH%252FJ.D.%252BRobb%252F9781250278210&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DABANDONED%252BIN%252BDEATH%252BJ.D.%252BRobb"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250278210&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DABANDONED%2BIN%2BDEATH"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250278210%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DABANDONED%2BIN%2BDEATH%2BJ.D.%2BRobb%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/bd6d455c-6efb-558a-b086-91faad9bd27c"},{"rank":14,"rank_last_week":7,"weeks_on_list":20,"asterisk":0,"dagger":0,"primary_isbn10":"0385546025","primary_isbn13":"9780385546027","publisher":"Doubleday","description":"The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.","price":"0.00","title":"THE JUDGE'S LIST","author":"John Grisham","contributor":"by John Grisham","contributor_note":"","book_image":"https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780385546027.jpg","book_image_width":329,"book_image_height":500,"amazon_product_url":"https:\/\/www.amazon.com\/dp\/0385546025?tag=NYTBSREV-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0385546025","isbn13":"9780385546027"},{"isbn10":"0385546033","isbn13":"9780385546034"},{"isbn10":"0593168496","isbn13":"9780593168493"},{"isbn10":"0593168488","isbn13":"9780593168486"}],"buy_links":[{"name":"Amazon","url":"https:\/\/www.amazon.com\/dp\/0385546025?tag=NYTBSREV-20"},{"name":"Apple Books","url":"https:\/\/goto.applebooks.apple\/9780385546027?at=10lIEQ"},{"name":"Barnes and Noble","url":"https:\/\/www.anrdoezrs.net\/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385546027"},{"name":"Books-A-Million","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BJUDGE%252527S%252BLIST%252FJohn%252BGrisham%252F9780385546027&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BJUDGE%252527S%252BLIST%252BJohn%252BGrisham"},{"name":"Bookshop","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385546027&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BJUDGE%2527S%2BLIST"},{"name":"IndieBound","url":"https:\/\/du-gae-books-dot-nyt-du-prd.appspot.com\/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780385546027%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BJUDGE%2527S%2BLIST%2BJohn%2BGrisham%26aff%3DNYT"}],"book_uri":"nyt:\/\/book\/8b6146c8-a02e-5f1a-beb8-aaa91fcdbc6a"},
]

export default class HomePage extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            bookData: [],
            searchedCategory: [],
            bookDetails: [],
            search: "",
            searchBy: '',
            title: '',
            author:'',
            price: '',
            description:'',
            publsihedDate: '',
            pageCount: '',
            subject: '',
            popularData: [],
            weeksOnList: '',
            image: '',
            rank: '',
            amazonLink: '',
            bookMap: []
        }
    }

    handleChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })

       
    }

   
  /*  fetchBookDetails() {
        let searchTerm = this.state.search;
        let search = this.state.searchBy;
        console.log(searchTerm)
        console.log(search)
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + search + '+' + searchTerm)
        fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
        .then(response => response.json())
        .then(result => {
            this.setState({
                bookData: result.items
            })
        })
    }
    */

    fetchPopularBookDetails() {
        axios.get(books)
        .then((response) => {
            console.log(response)
        })

           /* this.setState({
                title: book.title,
                author: book.author,
                image: book.book_image,
                description: book.description,
                rank: book.rank,
                amazonLink: book.amazon_product_url,
                weeksOnList: book.weeks_on_list
            })
        */

    }

    handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < books.length; i++) {
            books.map((book) => {
                if (book.description.includes(this.state.search) || book.title.includes(this.state.search)  || book.author.includes(this.state.search)) {
                    console.log(book)
                }
            })
        }
    }

    filterByPrice = () => {
        for (let i = 0; i < books.length; i++) {
            books.map((book) => {
                if(book.price <= priceInput) {
                    console.log(book)
                    this.setState({
                        bookData: book
                    })
                }
            })
        } 
    }

    filterByRating = () => {
        for (let i = 0; i < books.length; i++) {
            books.map((book) => {
                if(book.rating <= rateInput) {
                    console.log(book)
                    this.setState({
                        bookData: book
                    })
                }
            })
        } 
    }

    searchByWeeksOnList = (event) => {
        for (let i = 0; i < books.length; i++) {
           let mappedbooks = books.map((book) => {
                if (book.weeks_on_list > 6) {
                    this.setState({
                        bookData: book
                    })
                    console.log(book)
                    return book
                }
            })
        }    
    }

    searchByRank = () => {
        for (let i = 0; i < books.length; i++) {
            books.filter((book) => {
                if (book.rank <= 3) {
                    this.setState({
                        bookData: book
                    })
                    console.log(book)
                }
            })
        }
    }

    componentDidMount() {
        this.setState({
            bookData: books
        })
        console.log(this.state.bookData)
    }

    componentWillUnmount() {
        console.log('Component Will Unmount')
    }

    render() {

        return(
            <section>
                <header>

                    </header>

                <form onSubmit={this.handleSubmit} className='mainform'>
                    <label>Enter a Search Term</label>
                    <input type='text' onChange={this.handleChangeSearch} value={this.state.search} name='search' />
                    <button type="submit" onClick={this.handleSubmit}>Search</button>

                </form>
            <Pricing />
            <Rating />

            <div className="middle">
                <form className="sidebar">
                    <label>What Would You Like to Search By?</label>
                   
                   <label>Over 6 weeks on List</label>
                    <label className="switch">
                        <input type='checkbox' value='Author' onClick={this.searchByWeeksOnList}/>
                        <span className="slider round"/>
                        </label>
                    <label>Ranked Top 3</label>
                    <label className="switch">
                        <input type='checkbox' value='Subject' onClick={this.searchByRank} />
                        <span className="slider round"/>
                    </label>
        
                </form>
                
                <div className="List">
               {books.map((book) =>
               
                <BookListPage
                    id= {book.id}
                    title= {book.title}
                    author={book.author}
                    image={book.book_image}
                    description={book.description}
                    rank = {book.rank}
                    amazonLink = {book.amazonLink}
                    weeksOnList = {book.weeksOnList}

                />
                )}
                </div>
                
                </div>
            </section>
        )
    }
}