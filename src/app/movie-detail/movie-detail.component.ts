import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Movie {
  title: string;
  description: string;
  runtime: string;
  year: string;
  posterUrl: string;
  language: string;
  director: string;
  rating: string;
  genre: string;
  releaseDate?: string;
  theaters?: Theater[];
}

interface Theater {
  name: string;
  showtimes: string[];
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie?: Movie;

  movies: Movie[] = [
    {
      language: 'Tamil',
      title: 'Bottle Radha',
      year: '2025',
      director: 'Dhinakaran Sivalingam',
      description:
        'The plot revolves around the redemption of a mason who had lost his loved ones due to his alcoholism',
      runtime: '146 mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Bottle-Radha--770a3b20-b784-11ef-bb75-015d8093c807.jpg?format=webp&imwidth=576',
      rating: 'UA',
      genre: 'Drama',
    theaters: [
        {
            name: "Cinepolis - BSR Mall", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Tamil',
      title: 'HongKong Warriers',
      year: '2025',
      director: 'Soi Cheang',
      description:
        'Follows troubled youth Chan Lok-kwun as he accidentally enters the Walled City, discovers the order amidst its chaos, and learns important life lessons along the way',
      runtime: '145 mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Hongkong-Warriors-Poster-7d5d32f0-d883-11ef-b1f5-d3f6c5031ca5.jpg?format=webp&imwidth=576',
      rating: 'A',
      genre: 'Action, Crime, Thriller',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Tamil',
      title: 'Kudumbasthan',
      year: '2025',
      director: 'Rajeshwar Kalisamy',
      description: 'A gripping action thriller',
      runtime: '155 mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Kudumbasthan-Poster-226a0b50-d7cc-11ef-b68a-217a8a741140.jpg?format=webp&imwidth=576',
      rating: 'U',
      genre: 'Drama',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Tamil',
      title: 'Madha Gaja Raja',
      year: '2025',
      director: 'Sundar C',
      description:
        'In Chinna Anaikatti, Madha Gaja Raja assumes his father Inspector Srinivan s responsibility to protect Theekuchi Thirumugam and his daughter Madhavi from thugs hired by Shanmugapandi and citing safety Raja makes them stay at his residence',
      runtime: '145 mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Madha-Gaja-Raja--608---800--bb28c0c2-7a6c-4e7e-816f-d068c2eacdf8.jpg?format=webp&imwidth=576',
      rating: 'U',
      genre: 'Comedy, Action',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Tamil',
      title: 'Kadhalikka Neramillai',
      year: '2025',
      director: 'Kiruthiga Udhayanidhi',
      description:
        'In 2017, Chennai-based architect Shriya defies her conservative parents wishes by register-marrying her lover, Karan.',
      runtime: '143 mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/_Kadhalikka-Neramillai-2ec2f6b0-c9d9-11ef-a259-4b3c6d26f4a9.jpg?format=webp&imwidth=576',
      rating: 'UA16+',
      genre: 'Romance, Comedy',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Tamil',
      title: 'Vallan',
      year: '2025',
      director: 'VR Mani Seiyon',
      description:
        'The film is produced by VR Manikandaraman and V Gayathri under VR Della Film Factory banner.',
      runtime: '179 mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Vallan--Poster-eac89990-d7cc-11ef-83bf-1dede4761f84.jpg?format=webp&imwidth=576',
      rating: 'UA13+',
      genre: 'Thriller, Action',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Tamil',
      title: 'Mr.HouseKeeping',
      year: '2025',
      director: 'Arun Ravichandran',
      description:
        ' A spurned lover ends up working for his college crush, who seizes the chance for revenge. Their clashes turn into a battle of wits, uncovering a hidden spark.',
      runtime: '156mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Mr.-HouseKeeping--bee52d20-cf48-11ef-a49b-b718ff75bb84.jpg?format=webp&imwidth=576',
      rating: 'U',
      genre: 'Drama',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Tamil,English,Hindi,Malayalam',
      title: 'Mufasa - The Lion King',
      year: '2025',
      director: 'Barry Jenkins',
      description:
        'Mufasa was born to the reigning monarch of Pride Rock. As a cub, he was the son of King Ahadi and Queen Uru, and the younger brother of Scar.',
      runtime: '145mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Mufasa--The-Lion-King--9aae4ec0-b623-11ef-b3bf-abe9cfe9a9e4.jpg?format=webp&imwidth=576',
      rating: 'U',
      genre: 'Drama',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'English,Hindi.Tamil',
      title: 'Pushpa 2 - The Rule',
      year: '2025',
      director: 'Sukumar',
      description:
        'The Rule is a 2024 Indian Telugu -language action drama film [7] directed by Sukumar and produced by Mythri Movie Makers, in association with Sukumar Writings.',
      runtime: '178mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Pushpa2EXTENDED-57f54650-d983-11ef-ae28-cd7d2b647bb3.jpg?format=webp&imwidth=576',
      rating: 'UA16+',
      genre: 'Drama',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Tamil,English,Hindi',
      title: 'Game Changer',
      year: '2025',
      director: 'Karthik Subbaraj',
      description:
        'The movie is based on a story narrated by Jigarthanda director Karthik Subbaraj with Charan playing the role of an IAS officer.',
      runtime: '167mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Game%20Changer-6fc61d90-cce0-11ef-9d5d-039fb0afc1eb.jpeg?format=webp&imwidth=576',
      rating: 'U',
      genre: 'Drama',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'English,Tamil,Hindi',
      title: 'Ramayana - The Legend of Prince Rama',
      year: '2025',
      director: ' Yugo Sako',
      description:
        'The king of Ayodhya, Dasharatha is forced by his third wife Kaikeyi, on the basis of a boon promised by himself, to exile prince Rama for 14 years, where Rama, along with his brother Lakshmana and wife Sita,',
      runtime: '170mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Ramayana--The-Legend-of-Prince-Rama%20(2)-15feeac0-d97a-11ef-ae28-cd7d2b647bb3.jpg?format=webp&imwidth=576',
      rating: 'U',
      genre: 'Drama',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'English',
      title: 'Interstellar',
      year: '2025',
      director: 'Christopher Nolan',
      description:
        'Set in a dystopian future where Earth is suffering from catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind',
      runtime: '169mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Interstellar-English-App-poster-608x800-7621f764-80b6-4dfa-8ba7-fbe817cb9e55.jpg?format=webp&imwidth=576',
      rating: 'UA',
      genre: 'Adventure,Sci-Fi',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'English',
      title: 'Flight Risk',
      year: '2025',
      director: 'Mel Gibson',
      description:
        'The plot follows a pilot transporting a U.S. Marshal and a government witness across the Alaskan wilderness, where the identities and intentions of those onboard come into question',
      runtime: '91mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Flight-Risk--25954380-d7e0-11ef-b68a-217a8a741140.jpg?format=webp&imwidth=576',
      rating: 'A',
      genre: 'Thriller,Action,Crime',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'English',
      title: 'Sonic The Hedgehog 3',
      year: '2024',
      director: 'Jeff Fowler',
      description:
        'Sonic, Knuckles, and Tails reunite to face a powerful new adversary, Shadow, who allies with mad scientists Ivo and Gerald Robotnik in pursuit of revenge against humanity',
      runtime: '110mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Sonic-the-Hedgehog-3---600X800-6dd29e30-c68e-11ef-a259-4b3c6d26f4a9.jpg?format=webp&imwidth=576',
      rating: 'UA13+',
      genre: 'Animation, Adventure, Action,family',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'English',
      title: 'Moana 2',
      year: '2025',
      director: 'David Derrick Jr',
      description:
        'Three years after her first adventure, Moana reunites with Maui and assembles a new crew to find the lost island of Motufetu, break its curse, and reconnect the people of the ocean',
      runtime: '100mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Moana-2--608x800-522ef640-337e-11ef-95aa-f7343890830b-3461d0a0-ab25-11ef-8bec-85ca743197e0.jpg?format=webp&imwidth=576',
      rating: 'U',
      genre: 'Animation, Adventure, Comedy',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'English',
      title: 'Nosferatu',
      year: '2025',
      director: 'Robert Eggers',
      description:
        'A silent German Expressionist vampire film about Count Orlok, who preys on the wife of his estate agent and brings terror to their town',
      runtime: '94mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Nosferatu-4be72ea0-cda3-11ef-ba8d-1d3e55e20a2d.jpg?format=webp&imwidth=576',
      rating: 'A',
      genre: 'Horror,Fantasy,thriller',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'English',
      title: 'Twilight of the warriors',
      year: '2025',
      director: 'Soi Cheang',
      description:
        'The film follows troubled youth Chan Lok-kwan as he accidentally enters the notorious Kowloon Walled City, discovers the order amidst its chaos, and learns important life lessons along the way',
      runtime: '126mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Twilight-83af1d10-d556-11ef-b0b4-a1004a37a2e8.jpg?format=webp&imwidth=576',
      rating: 'UA',
      genre: 'Action,Crime,Thriller',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Hindi',
      title: 'Sky Force',
      year: '2025',
      director: 'Abhishek Anil Kapur and Sandeep Kewlani',
      description:
        'The film is based on Indias first airstrike on the Sargodha airbase in Pakistan during the 1965 Indo-Pakistani air war. It follows the story of Wing Commander K.O. Ahuja and T. Krishna Vijaya, highlighting their bravery and the sacrifices made during the war',
      runtime: '125mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/WhatsApp%20Image%202025-01-20%20at%208.10.00%20PM-96c18810-d73c-11ef-ba8a-338a2e567ebd.jpeg?format=webp&imwidth=576',
      rating: 'UA13+',
      genre: 'Action',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Hindi',
      title: 'Emergency',
      year: '2025',
      director: 'Kangana Ranaut',
      description:
        'The film is a historical biographical drama that chronicles the controversial period of the Emergency in India from 1975 to 1977, focusing on the leadership of Prime Minister Indira Gandhi',
      runtime: '146mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Emergency--608x800-4cc37540-babc-11ee-aa0d-fffa0ed2ba98.jpg?format=webp&imwidth=576',
      rating: 'UA',
      genre: 'Drama,Political',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Malayalam',
      title: 'Rekhachithram',
      year: '2025',
      director: 'Kangana Ranaut',
      description:
        'The film is a historical biographical drama that chronicles the controversial period of the Emergency in India from 1975 to 1977, focusing on the leadership of Prime Minister Indira Gandhi',
      runtime: '139mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Rekhachithram---600X800-bfa8b380-c37c-11ef-9d6e-4fc6aa99698c.jpg?format=webp&imwidth=576',
      rating: 'UA',
      genre: 'Drama,Thriller',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

    {
      language: 'Malayalam',
      title: 'Anpodu Kanmani',
      year: '2025',
      director: 'Kangana Ranaut',
      description:
        'The film is a historical biographical drama that chronicles the controversial period of the Emergency in India from 1975 to 1977, focusing on the leadership of Prime Minister Indira Gandhi',
      runtime: '146mins',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Anpodu-Kanmani-Poster-48c488e0-d7ca-11ef-83bf-1dede4761f84.jpg?format=webp&imwidth=576',
      rating: 'UA13+',
      genre: 'Drama,Political',
    theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]},

  ];
  upcomingMovies: Movie[] = [
    {
      title: 'Ponman',
      description: '',
      runtime: '',
      year: '2025-03-10',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Ponman--Poster-a4525830-d7e4-11ef-83bf-1dede4761f84.jpg?format=webp&imwidth=582',
      language: 'Malayalam',
      director: 'Jothish Kumar',
      rating: 'PG',
      genre: 'Comedy, Drama',
      theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]
      // releaseDate: '2025-03-10'  // Add releaseDate
    },
    {
      title: 'Agathiyaa',
      description:
        'When destiny throws a common man amidst the fight of good and bad, then the forces of the universe unite to send Angels to help him to battle the dark forces of the devil',
      runtime: '130 mins',
      year: '2025-04-15',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Aghathiyaa---608x800-57d58ec0-8ab2-11ef-902c-0f8b88e9823c.jpg?format=webp&imwidth=582',
      language: 'Tamil',
      director: 'PA Vijay',
      rating: 'UA13+',
      genre: 'Fantasy,Thriller',
      theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]
    },
    {
      title: 'Indra',
      description:
        'A Tamil movie directed by Sabarish Nanda, starring Vasanth Ravi and Mehreen Pirzada in lead roles. ',
      runtime: '130 mins',
      year: '2025-04-15',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/169169-b0d38780-3e85-11ef-99b5-d35223c98590.jpg?format=webp&imwidth=582',
      language: 'Tamil',
      director: ' Sabarish Nanda',
      rating: 'U',
      genre: 'Suspense,Thriller',
      theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]
    },
    {
      title: 'Deva',
      description:
        'An edge-of-the-seat high-octane action thriller film set in Mumbai, about a brilliant yet rebellious police officer who uncovers a web of deceit and betrayal while investigating a high-profile case',
      runtime: '130 mins',
      year: '2025-04-15',
      posterUrl:
        'https://assetscdn1.paytm.com/images/cinema/Deva-beb429c0-c9b0-11ef-9d67-413c0fb75c8e.jpg?format=webp&imwidth=582',
      language: 'Hindi',
      director: 'Rosshan Andrrews',
      rating: 'UA16+',
      genre: 'Action, Thriller',
      theaters: [
        {
            name: "BSR Mall - Cinepolis", 
            showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "Orian Mall - PVR Cinemas",
            showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
        }
    ]    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.movie = this.movies
      .concat(this.upcomingMovies)
      .find((movie) => movie.title === title);
  }

  isUpcomingMovie(movie: Movie): boolean {
    return this.upcomingMovies.some(
      (upcomingMovie) => upcomingMovie.title === movie.title
    );
  }

  bookNow(): void {
    // Implement your booking logic here
    console.log('Booking movie:', this.movie?.title);
    // Example: Navigate to a booking page
    this.router.navigate(['/booking', this.movie?.title]);
  }
}