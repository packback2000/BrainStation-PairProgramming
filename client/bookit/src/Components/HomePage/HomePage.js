import React from "react";
import BookListPage from "../BookListPage/BookListPage";
import "../../styles/styles.css"
import "../../styles/DarkMode.css";
import Pricing from "../Pricing/Pricing";
import Rating from "../Pricing/Rating";
import priceInput from "../Pricing/Pricing";
import rateInput from "../Pricing/Rating";
import axios from 'axios';

let books = {
    
        "kind": "books#volumes",
        "totalItems": 519,
        "items": [
          {
            "kind": "books#volume",
            "id": "TAFSEAAAQBAJ",
            "etag": "lMs3igbvJBI",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/TAFSEAAAQBAJ",
            "volumeInfo": {
              "title": "The Complete Language of Flowers (gift Edition)",
              "subtitle": "A Definitive and Illustrated History",
              "authors": ["S. Theresa Dietz"],
              "publisher": "Wellfleet",
              "publishedDate": "2022-03",
              "description": "The Complete Language of Flowers is a comprehensive and definitive dictionary/reference presenting the history, symbolic meaning, and visual depiction of 1,001 flowers and botanicals from around the world in one volume--now in a pocket-size edition for easy, on-the-go reference.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781577152835"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1577152832"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 256,
              "printType": "BOOK",
              "categories": ["Crafts & Hobbies"],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "preview-1.0.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=TAFSEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=TAFSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=TAFSEAAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=1&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=TAFSEAAAQBAJ&dq=flowers&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/The_Complete_Language_of_Flowers_gift_Ed.html?hl=&id=TAFSEAAAQBAJ"
            },
            "saleInfo": {
              "country": "US",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "US",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=TAFSEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "The Complete Language of Flowers is a comprehensive and definitive dictionary/reference presenting the history, symbolic meaning, and visual depiction of 1,001 flowers and botanicals from around the world in one volume—now in a pocket ..."
            }
          },
          {
            "kind": "books#volume",
            "id": "bHBWEAAAQBAJ",
            "etag": "6tfemb+B9GM",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/bHBWEAAAQBAJ",
            "volumeInfo": {
              "title": "Healing with Flowers",
              "subtitle": "The Power of Floral Medicine",
              "authors": ["Anne McIntyre"],
              "publisher": "Aeon Books",
              "publishedDate": "2021-12-30",
              "description": "The healing power of flowers permeates every aspect of our lives. Flowers help us mark every event and ceremony from birth to death and bring us joy and solace throughout the years. They have inspired poets, authors and artists and come to symbolise the whole range of human experience. From exuberant red peonies to sweet-smelling primroses, exotic lilies and heavenly-scented roses, flowers have the power to reconnect us with the conscious intelligence of nature that we are a part of and to heal our ills in a myriad of ways.Healing with Flowers is Anne McIntyre's revised and expanded edition of her previous work The Complete Floral Healer and it tells the story of the mythological and historical origins of flowers in healing and medicine and reminds us of their significance which is as powerful today as it was in ancient times.Beautifully illustrated with vibrant colour photographs by Julie Bruton-Seal, the book explores sixty-four flowers from around the world - from Yarrow (Achillea millefolium) to Heartsease (Viola tricolor) alongside chapters on edible flowers, growing and gathering, and distilling flowers.Each flower entry reveals the plant's historical and folkloric importance, details the modern medicinal use of the flower as a herbal remedy relating to its biochemical constituents, and explores its use in aromatherapy, homoeopathy and as a flower essence.A deeper understanding of the unique character of each flower - its story, personality and energy - is woven through this book and is a key resource for anyone who loves flowers, as well as gardeners and herbalists alike.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781801520195"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1801520194"
                }
              ],
              "readingModes": {
                "text": true,
                "image": true
              },
              "printType": "BOOK",
              "categories": ["Health & Fitness"],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "1.1.1.0.preview.3",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=bHBWEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=bHBWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=bHBWEAAAQBAJ&pg=PP1&dq=flowers&hl=&cd=2&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=bHBWEAAAQBAJ&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=bHBWEAAAQBAJ"
            },
            "saleInfo": {
              "country": "US",
              "saleability": "FOR_SALE",
              "isEbook": true,
              "listPrice": {
                "amount": 36.95,
                "currencyCode": "USD"
              },
              "retailPrice": {
                "amount": 36.95,
                "currencyCode": "USD"
              },
              "buyLink": "https://play.google.com/store/books/details?id=bHBWEAAAQBAJ&rdid=book-bHBWEAAAQBAJ&rdot=1&source=gbs_api",
              "offers": [
                {
                  "finskyOfferType": 1,
                  "listPrice": {
                    "amountInMicros": 36950000,
                    "currencyCode": "USD"
                  },
                  "retailPrice": {
                    "amountInMicros": 36950000,
                    "currencyCode": "USD"
                  },
                  "giftable": true
                }
              ]
            },
            "accessInfo": {
              "country": "US",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Healing_with_Flowers-sample-epub.acsm?id=bHBWEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Healing_with_Flowers-sample-pdf.acsm?id=bHBWEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "webReaderLink": "http://play.google.com/books/reader?id=bHBWEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "From exuberant red peonies to sweet-smelling primroses, exotic lilies and heavenly-scented roses, flowers have the power to reconnect us with the conscious intelligence of nature that we are a part of and to heal our ills in a myriad of ..."
            }
          },
          {
            "kind": "books#volume",
            "id": "ZsQdEAAAQBAJ",
            "etag": "F1iLDp/8ryE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/ZsQdEAAAQBAJ",
            "volumeInfo": {
              "title": "Flowers by Design",
              "subtitle": "Creating Arrangements for Your Space",
              "authors": ["Ingrid Carozzi"],
              "publisher": "Abrams",
              "publishedDate": "2021-11-23",
              "description": "From florist and founder of Tin Can Studios Ingrid Carozzi, a guide to creating floral arrangements that will complement your unique style and taste Flowers are classic, timeless design elements that enliven your home and your life. Flower arrangements can act as an extension of your style and your tastes, complementing and accenting the aesthetic in your home. Ingrid Carozzi brought us beautiful arrangements in her first book, Handpicked, and is now offering even more tips and techniques to bring the joy of flowers into your space in new and fresh ways. Flowers by Design focuses on creating unique and beautiful floral arrangements that fit into and complement the overall look and feel of your home. More minimal tastes? There's a floral bouquet for that. Rustic chic? There's an arrangement for that. Planning an outdoor garden party? Of course, there are plenty of beautiful flowers to enhance the outdoors. Through her experience, Carozzi has developed an exceptional list of designers, influencers, and artists that she works with. Using their backgrounds and homes as inspiration, she provides a number of floral recipes that you can create at home. The contributors utilize their own spaces as the setting for seeing these arrangements in place, offering plenty of ideas for what you can do on your own.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781683359531"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1683359534"
                }
              ],
              "readingModes": {
                "text": true,
                "image": true
              },
              "pageCount": 160,
              "printType": "BOOK",
              "categories": ["Crafts & Hobbies"],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "1.2.2.0.preview.3",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=ZsQdEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=ZsQdEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=ZsQdEAAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=3&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=ZsQdEAAAQBAJ&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ZsQdEAAAQBAJ"
            },
            "saleInfo": {
              "country": "US",
              "saleability": "FOR_SALE",
              "isEbook": true,
              "listPrice": {
                "amount": 18.65,
                "currencyCode": "USD"
              },
              "retailPrice": {
                "amount": 18.65,
                "currencyCode": "USD"
              },
              "buyLink": "https://play.google.com/store/books/details?id=ZsQdEAAAQBAJ&rdid=book-ZsQdEAAAQBAJ&rdot=1&source=gbs_api",
              "offers": [
                {
                  "finskyOfferType": 1,
                  "listPrice": {
                    "amountInMicros": 18650000,
                    "currencyCode": "USD"
                  },
                  "retailPrice": {
                    "amountInMicros": 18650000,
                    "currencyCode": "USD"
                  },
                  "giftable": true
                }
              ]
            },
            "accessInfo": {
              "country": "US",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Flowers_by_Design-sample-epub.acsm?id=ZsQdEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Flowers_by_Design-sample-pdf.acsm?id=ZsQdEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "webReaderLink": "http://play.google.com/books/reader?id=ZsQdEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "From florist and founder of Tin Can Studios Ingrid Carozzi, a guide to creating floral arrangements that will complement your unique style and taste Flowers are classic, timeless design elements that enliven your home and your life."
            }
          },
          {
            "kind": "books#volume",
            "id": "1KdOEAAAQBAJ",
            "etag": "lVUI71XF9g4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/1KdOEAAAQBAJ",
            "volumeInfo": {
              "title": "Nature， Man and Flowers: Kado as philosophical ikebana",
              "authors": ["Inoue Osamu"],
              "publisher": "さいはて社",
              "publishedDate": "2021-10-27",
              "description": "Kado is a concept that emphasises the philosophical aspect of ikebana, or traditional Japanese flower arranging culture. Ka means “flowers,” and do means “way.” Thus, kado means “the way of flowers” or “the way through flowers.” This way leads to the truth, and consequently, the way itself is the truth. In kado, it is the practitioner’s goal to find this way through arranging flowers as the symbol of nature. We might therefore call it “dynamic Zen.” Of course, the artistic aspect of flower arranging culture, namely ikebana, should not be denied, and should be valued as a part of traditional flower arranging culture. However, it is just a part and not the whole picture of this culture. This book aims to emphasise the other part, kado, and redress the balance of interpretation of this traditional culture. Our standpoint is to regard this culture as a philosophical or religious way, not as so-called art. The structure of this book is as follows. The first chapter is an overview of the history of kado, the second chapter explains its traditional regulations. Finally, the third chapter, considers the thought which has been the basis of the concept of kado.",
              "industryIdentifiers": [
                {
                  "type": "OTHER",
                  "identifier": "PKEY:BT000104219400100102900209"
                }
              ],
              "readingModes": {
                "text": true,
                "image": true
              },
              "pageCount": 70,
              "printType": "BOOK",
              "categories": ["Crafts & Hobbies"],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.1.1.0.preview.3",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=1KdOEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=1KdOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=1KdOEAAAQBAJ&pg=PP1&dq=flowers&hl=&cd=4&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=1KdOEAAAQBAJ&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=1KdOEAAAQBAJ"
            },
            "saleInfo": {
              "country": "US",
              "saleability": "FOR_SALE",
              "isEbook": true,
              "listPrice": {
                "amount": 8.71,
                "currencyCode": "USD"
              },
              "retailPrice": {
                "amount": 8.71,
                "currencyCode": "USD"
              },
              "buyLink": "https://play.google.com/store/books/details?id=1KdOEAAAQBAJ&rdid=book-1KdOEAAAQBAJ&rdot=1&source=gbs_api",
              "offers": [
                {
                  "finskyOfferType": 1,
                  "listPrice": {
                    "amountInMicros": 8710000,
                    "currencyCode": "USD"
                  },
                  "retailPrice": {
                    "amountInMicros": 8710000,
                    "currencyCode": "USD"
                  },
                  "giftable": true
                }
              ]
            },
            "accessInfo": {
              "country": "US",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Nature_Man_and_Flowers_Kado_as_philosoph-sample-epub.acsm?id=1KdOEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Nature_Man_and_Flowers_Kado_as_philosoph-sample-pdf.acsm?id=1KdOEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "webReaderLink": "http://play.google.com/books/reader?id=1KdOEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "However, it is just a part and not the whole picture of this culture. This book aims to emphasise the other part, kado, and redress the balance of interpretation of this traditional culture."
            }
          },
          {
            "kind": "books#volume",
            "id": "QZAtEAAAQBAJ",
            "etag": "3/KNX1+w7K0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/QZAtEAAAQBAJ",
            "volumeInfo": {
              "title": "Growing Flowers",
              "subtitle": "Everything You Need to Know About Planting, Tending, Harvesting and Arranging Beautiful Blooms",
              "authors": ["Niki Irving"],
              "publisher": "Mango Media Inc.",
              "publishedDate": "2021-05-11",
              "description": "Learn How to Grow Flowering Plants “Anyone wanting to get started with a flower garden will find plenty of expert guidance here.” ―Publishers Weekly #1 Best Seller in Annual Flowers Gardening, Bulb Flower Gardening, and Perennial Gardening. In the mountains of Asheville, NC, Niki Irving’s boutique flower farm grows specially cut, mountain-fresh flowers with sustainable, natural practices. Now, she brings her organic gardening techniques to your home, helping you grow, harvest, and arrange lush, seasonally inspired flowers. Revel in flowering plants. This beautifully photographed book features simple, and engaging know-how enabling you to grow, harvest, and arrange a cutting garden of flowers. An instructional guide to gardening for beginners or if you’re looking to hone your botanical skills, Growing Flowers teaches everything from caring for a cut flower garden to making simple-yet-gorgeous flower arrangements and botanical bouquets. An indispensable gardening guide for homebody horticulturists and floral foragers. A flower book with a whimsical twist, Growing Flowers is a go-to reference for those new to herb and flower gardening. Discover flower arranging techniques using blooms, greenery, and even artichokes, vines and berries. Learn about tools of the trade. Get down and dirty with dirt, seasonal rotation, starting from seeds and/or seedlings, and more. Inside find: • Explanations of soil types and soil preparations • A list of seasonal flowers such as peonies or garden roses for the spring and sunflowers and dahlias for the summer and fall • Basic knowledge to create flower bouquets that include things like sprigs of greenery and even attractive weeds Growing Flowers is a wonderful addition to any collection of garden books. If you’re looking for gardening gifts for gardeners or enjoy flowering plant books and flower books like Floret Farms Cut Flower Garden book, Floret Farm's A Year in Flowers, or The Flower Gardener's Bible, you’ll love Growing Flowers.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781642505511"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "164250551X"
                }
              ],
              "readingModes": {
                "text": true,
                "image": true
              },
              "pageCount": 161,
              "printType": "BOOK",
              "categories": ["Gardening"],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "1.1.1.0.preview.3",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=QZAtEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=QZAtEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=QZAtEAAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=5&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=QZAtEAAAQBAJ&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=QZAtEAAAQBAJ"
            },
            "saleInfo": {
              "country": "US",
              "saleability": "FOR_SALE",
              "isEbook": true,
              "listPrice": {
                "amount": 11.99,
                "currencyCode": "USD"
              },
              "retailPrice": {
                "amount": 11.99,
                "currencyCode": "USD"
              },
              "buyLink": "https://play.google.com/store/books/details?id=QZAtEAAAQBAJ&rdid=book-QZAtEAAAQBAJ&rdot=1&source=gbs_api",
              "offers": [
                {
                  "finskyOfferType": 1,
                  "listPrice": {
                    "amountInMicros": 11990000,
                    "currencyCode": "USD"
                  },
                  "retailPrice": {
                    "amountInMicros": 11990000,
                    "currencyCode": "USD"
                  },
                  "giftable": true
                }
              ]
            },
            "accessInfo": {
              "country": "US",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true
              },
              "pdf": {
                "isAvailable": true
              },
              "webReaderLink": "http://play.google.com/books/reader?id=QZAtEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Revel in flowering plants. This beautifully photographed book features simple, and engaging know-how enabling you to grow, harvest, and arrange a cutting garden of flowers."
            }
          },
          {
            "kind": "books#volume",
            "id": "Xr8YEAAAQBAJ",
            "etag": "dTr000x++mE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/Xr8YEAAAQBAJ",
            "volumeInfo": {
              "title": "The Flower Yard",
              "subtitle": "Growing Flamboyant Flowers in Containers",
              "authors": ["Arthur Parkinson"],
              "publisher": "Octopus Books",
              "publishedDate": "2021-03-29",
              "description": "'The Flower Yard is simply gorgeous. Inspirational, sumptuous and packed with refreshingly down-to-earth advice. I love this book.' Nigel Slater Arthur Parkinson's town garden is like a path of pots, a tiny, exposed stage on bricks. Despite its small size, a flower-filled jungle in Venetian tones is grown here each year, in defiance of urbanisation. The plants act like drapes, closing gently as their growth engulfs the front door, from either side of the path, to the buzz of precious bees. This is gardening done entirely in pots, yet on a grand scale that will inspire anyone who wants their doorstep or patio to be a glamorous and lively canvas that nurtures them visually and mentally. From jewel scatterings of crocus, flocks of parrot tulips and scented sweet peas to galaxies of single dahlias, towering giraffes of amaryllises grown inside for winter and endless vases of cut blooms through the seasons. With his bantam hens at his feet, Arthur shares his life, knowledge, flair and influences for planting creatively, all of which combine to create a space that's rich in ever-changing colour and life.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9780857839923"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "0857839926"
                }
              ],
              "readingModes": {
                "text": true,
                "image": false
              },
              "pageCount": 208,
              "printType": "BOOK",
              "categories": ["Gardening"],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": true,
              "contentVersion": "1.2.2.0.preview.2",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=Xr8YEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=Xr8YEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=Xr8YEAAAQBAJ&pg=PP1&dq=flowers&hl=&cd=6&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=Xr8YEAAAQBAJ&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=Xr8YEAAAQBAJ"
            },
            "saleInfo": {
              "country": "US",
              "saleability": "FOR_SALE",
              "isEbook": true,
              "listPrice": {
                "amount": 0.99,
                "currencyCode": "USD"
              },
              "retailPrice": {
                "amount": 0.99,
                "currencyCode": "USD"
              },
              "buyLink": "https://play.google.com/store/books/details?id=Xr8YEAAAQBAJ&rdid=book-Xr8YEAAAQBAJ&rdot=1&source=gbs_api",
              "offers": [
                {
                  "finskyOfferType": 1,
                  "listPrice": {
                    "amountInMicros": 990000,
                    "currencyCode": "USD"
                  },
                  "retailPrice": {
                    "amountInMicros": 990000,
                    "currencyCode": "USD"
                  },
                  "giftable": true
                }
              ]
            },
            "accessInfo": {
              "country": "US",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/The_Flower_Yard-sample-epub.acsm?id=Xr8YEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=Xr8YEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "The Times Best Gardening Books of the Year 2021 &#39;The Flower Yard is simply gorgeous. Inspirational, sumptuous and packed with refreshingly down-to-earth advice. I love this book."
            }
          },
          {
            "kind": "books#volume",
            "id": "7PYREAAAQBAJ",
            "etag": "V9qUurrTmIQ",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/7PYREAAAQBAJ",
            "volumeInfo": {
              "title": "The RHS Book of Flower Poetry and Prose",
              "authors": ["Charles Elliott"],
              "publisher": "Frances Lincoln",
              "publishedDate": "2021-03-09",
              "description": "Artists and writers have always been drawn to flowers, as sources of inspiration, for simple enjoyment, and flowers themselves have been the muses for many of our greatest and most memorable works of art. This volume brings together the best flower poetry and prose from a broad range of writers, from Shakespeare and Milton, to Reginald Farrer and Edward Augustus Bowles, to twentieth-century poets such as Marianne Moore and Theodore Roethke. Wild and garden flowers are here explored in all their moods and mysteries. The poems and extracts are illustrated with botanical art from the Royal Horticultural Society’s Lindley Library, acknowledged as the world’s finest horticultural library. Addison • Betjeman • Bowles • Bradley and Cooper • Burns • Burroughs • Capek • Carroll • Clare • Colette • Crabbe • Ellacombe • Farrer • Fish • Gerard • Gilbert • Hanmer • Hardy • Hopkins • Housman • Hudson • Hunt • Jekyll • Johnson • Lawrence • Longfellow • Marvell • Milton • Mitchell • Moore • Parkinson • Pitter • Plunkett • Ridler • Roethke • Rohde • Rossetti • Sackville West • Seward • Shakespeare • Silkin • Sitwell • Stevenson • Swinburne • Thomas • Williams • Williamson • Wither • Wordsworth",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9780711261976"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "0711261970"
                }
              ],
              "readingModes": {
                "text": true,
                "image": true
              },
              "pageCount": 148,
              "printType": "BOOK",
              "categories": ["Gardening"],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "2.2.2.0.preview.3",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=7PYREAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=7PYREAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=7PYREAAAQBAJ&pg=PA30&dq=flowers&hl=&cd=7&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=7PYREAAAQBAJ&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=7PYREAAAQBAJ"
            },
            "saleInfo": {
              "country": "US",
              "saleability": "FOR_SALE",
              "isEbook": true,
              "listPrice": {
                "amount": 13,
                "currencyCode": "USD"
              },
              "retailPrice": {
                "amount": 13,
                "currencyCode": "USD"
              },
              "buyLink": "https://play.google.com/store/books/details?id=7PYREAAAQBAJ&rdid=book-7PYREAAAQBAJ&rdot=1&source=gbs_api",
              "offers": [
                {
                  "finskyOfferType": 1,
                  "listPrice": {
                    "amountInMicros": 13000000,
                    "currencyCode": "USD"
                  },
                  "retailPrice": {
                    "amountInMicros": 13000000,
                    "currencyCode": "USD"
                  },
                  "giftable": true
                }
              ]
            },
            "accessInfo": {
              "country": "US",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/The_RHS_Book_of_Flower_Poetry_and_Prose-sample-epub.acsm?id=7PYREAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/The_RHS_Book_of_Flower_Poetry_and_Prose-sample-pdf.acsm?id=7PYREAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "webReaderLink": "http://play.google.com/books/reader?id=7PYREAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "The other fritillary of which I must speak as one of the grandest of April \u003cb\u003eflowers\u003c/b\u003e – I might almost say one of the grandest \u003cb\u003eflowers\u003c/b\u003e of the year – is the great fritillary, the Crown Imperial. It is a native of Persia, Afghanistan and&nbsp;..."
            }
          },
          {
            "kind": "books#volume",
            "id": "KRggEAAAQBAJ",
            "etag": "Muw04zYbRTQ",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/KRggEAAAQBAJ",
            "volumeInfo": {
              "title": "A Year Full of Flowers",
              "subtitle": "Gardening for all seasons",
              "authors": ["Sarah Raven"],
              "publisher": "Bloomsbury Publishing",
              "publishedDate": "2021-03-04",
              "description": "Inspiration, planting ideas and expert advice for a beautiful garden all-year round Colour and scent are the hallmarks of Sarah Raven's style – and they are simple luxuries that everyone can bring into their garden. A Year Full of Flowers reveals the hundreds of hardworking varieties that make the garden sing each month, together with the practical tasks that ensure everything is planted, staked and pruned at just the right time. Tracing the year from January to December at her home, Perch Hill, Sarah offers a complete and transporting account of a garden crafted over decades. Sharing the lessons learned from years of plant trials, she explains the methods that have worked for her, and shows you how to achieve a space that's full of life and colour. Discover long-lasting, divinely scented tulips, roses that keep flowering through winter, the most magnificent dahlias and show-stopping alliums, as well as how to grow sweet peas up a teepee, take cuttings from chrysanthemums and stop mildew in its tracks. This is passionate, life-enriching gardening; it's also simple, adaptable and can work for you. Sarah has made the garden central to her life – this book shows you how you can too.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781526640390"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1526640392"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 384,
              "printType": "BOOK",
              "categories": ["Gardening"],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "preview-1.0.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=KRggEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=KRggEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=KRggEAAAQBAJ&pg=PP1&dq=flowers&hl=&cd=8&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=KRggEAAAQBAJ&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=KRggEAAAQBAJ"
            },
            "saleInfo": {
              "country": "US",
              "saleability": "FOR_SALE",
              "isEbook": true,
              "listPrice": {
                "amount": 24.5,
                "currencyCode": "USD"
              },
              "retailPrice": {
                "amount": 14.46,
                "currencyCode": "USD"
              },
              "buyLink": "https://play.google.com/store/books/details?id=KRggEAAAQBAJ&rdid=book-KRggEAAAQBAJ&rdot=1&source=gbs_api",
              "offers": [
                {
                  "finskyOfferType": 1,
                  "listPrice": {
                    "amountInMicros": 24500000,
                    "currencyCode": "USD"
                  },
                  "retailPrice": {
                    "amountInMicros": 14460000,
                    "currencyCode": "USD"
                  },
                  "giftable": true
                }
              ]
            },
            "accessInfo": {
              "country": "US",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/A_Year_Full_of_Flowers-sample-pdf.acsm?id=KRggEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "webReaderLink": "http://play.google.com/books/reader?id=KRggEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "This is passionate, life-enriching gardening; it&#39;s also simple, adaptable and can work for you. Sarah has made the garden central to her life – this book shows you how you can too."
            }
          },
          {
            "kind": "books#volume",
            "id": "86IQEAAAQBAJ",
            "etag": "adJuC0OOkd0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/86IQEAAAQBAJ",
            "volumeInfo": {
              "title": "Felt Flower Workshop",
              "subtitle": "A Modern Guide to Crafting Gorgeous Plants & Flowers from Fabric",
              "authors": ["Bryanne Rajamannar"],
              "publisher": "C&T Publishing Inc",
              "publishedDate": "2021-01-25",
              "description": "Aimed at absolute beginners—the book starts with an overview of basic techniques and then progresses on to simple lessons for making flowers, plants, leaves, and branches. Each lesson comes with a detailed reference photograph, easy-to-follow step-by-step instructions, and pattern. Once the lessons are complete, the reader can progress onto a series of beautifully-designed projects (featuring the plants and flowers previously practiced). Each project is introduced with a styled photograph showing the item in an attractive modern setting along with easy instructions for assembly.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781644030424"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "164403042X"
                }
              ],
              "readingModes": {
                "text": true,
                "image": false
              },
              "pageCount": 128,
              "printType": "BOOK",
              "categories": ["Crafts & Hobbies"],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.1.1.0.preview.2",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=86IQEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=86IQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=86IQEAAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=9&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=86IQEAAAQBAJ&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=86IQEAAAQBAJ"
            },
            "saleInfo": {
              "country": "US",
              "saleability": "FOR_SALE",
              "isEbook": true,
              "listPrice": {
                "amount": 19.99,
                "currencyCode": "USD"
              },
              "retailPrice": {
                "amount": 19.99,
                "currencyCode": "USD"
              },
              "buyLink": "https://play.google.com/store/books/details?id=86IQEAAAQBAJ&rdid=book-86IQEAAAQBAJ&rdot=1&source=gbs_api",
              "offers": [
                {
                  "finskyOfferType": 1,
                  "listPrice": {
                    "amountInMicros": 19990000,
                    "currencyCode": "USD"
                  },
                  "retailPrice": {
                    "amountInMicros": 19990000,
                    "currencyCode": "USD"
                  },
                  "giftable": true
                }
              ]
            },
            "accessInfo": {
              "country": "US",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Felt_Flower_Workshop-sample-epub.acsm?id=86IQEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=86IQEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Aimed at absolute beginners—the book starts with an overview of basic techniques and then progresses on to simple lessons for making flowers, plants, leaves, and branches."
            }
          },
          {
            "kind": "books#volume",
            "id": "iL4cEAAAQBAJ",
            "etag": "GxpDFDKOoOw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/iL4cEAAAQBAJ",
            "volumeInfo": {
              "title": "Flowers Through Concrete",
              "subtitle": "Explorations in Soviet Hippieland",
              "authors": ["Juliane Fürst"],
              "publisher": "Oxford University Press, USA",
              "publishedDate": "2020-12-31",
              "description": "In the face of disapproval and repression Soviet hippies created a version of Western counterculture, skilfully adapting to, manipulating, and shaping their late socialist environment. This book explores their lives and thoughts.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9780198788324"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "0198788320"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 496,
              "printType": "BOOK",
              "categories": ["History"],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "2.3.0.0.preview.1",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=iL4cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=iL4cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=iL4cEAAAQBAJ&pg=PP1&dq=flowers&hl=&cd=10&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=iL4cEAAAQBAJ&dq=flowers&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_Through_Concrete.html?hl=&id=iL4cEAAAQBAJ"
            },
            "saleInfo": {
              "country": "US",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "US",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=iL4cEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "In the face of disapproval and repression Soviet hippies created a version of Western counterculture, skilfully adapting to, manipulating, and shaping their late socialist environment. This book explores their lives and thoughts."
            }
          }
        ]
      }

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
    
    handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < this.state.bookData.length; i++) {
          let books = this.state.bookData
            books.map((book) => {
                if (book.volumeInfo.title === (this.state.search)  || book.volumeInfo.authors === (this.state.search)) {
                    this.setState({
                      bookData: book
                    })
                }
            })
        }
    }

    filterByPrice = () => {
        console.log(this.priceInput)
    }

    filterByRating = () => {

    }

    searchByRatingNumber = () => {
      let bookVar = this.state.bookData.filter((book) => {
            if(book.volumeInfo.ratingsCount >= 50){
                console.log(book)
                return book
        }
       })
       console.log(bookVar)
       this.setState({
         bookData: bookVar
       })
      }

    searchByAverageRating = () => {
      let bookVar = this.state.bookData.filter((book) => {
        if(book.volumeInfo.averageRating >=4){
          console.log(book)
          return book
        }
      })
       this.setState({
         bookData:bookVar
       })
    }

    fetchBookDetails() {
       axios.get("https://www.googleapis.com/books/v1/volumes?q=stephen%20king+author")
       .then((response) => {
           let allData = response.data.items;
           this.setState({
               bookData: allData
           })
       })
    }

    componentDidMount() {
        this.fetchBookDetails();
        let searchString = this.state.search
        axios.get('http://localhost:8080/search/' + searchString)
        .then(response => console.log(response))
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
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
                    <label>Filter By</label>
                   <br></br>
                   <br></br>
                   <label>Over 50 Ratings</label>
                    <label className="switch">
                        <input type='checkbox' value='Ratings' onClick={this.searchByRatingNumber}/>
                        <span className="slider round"/>
                        </label>
                    <label>Average Ranking 4+</label>
                    <label className="switch">
                        <input type='checkbox' value='Average Rank' onClick={this.searchByAverageRating} />
                        <span className="slider round"/>
                    </label>
        
                </form>

                <div className="bookList">
                {this.state.bookData.map((video) => 
                <div className="List">
                
                <BookListPage 
                id = {video.id}
                title = {video.volumeInfo.title}
                author = {video.volumeInfo.authors}
                category = {video.volumeInfo.categories}
                image = {video.volumeInfo.imageLinks.thumbnail}
                price = {video.saleInfo.retailPrice}
                pageCount = {video.volumeInfo.pageCount}
                description = {video.volumeInfo.description}
                rating = {video.volumeInfo.averageRating}
                ratingCount = {video.volumeInfo.ratingsCount}
                />
                </div>
                )}
                </div>
                </div>
            </section>
        )
    }
}
