import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService) { }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documenteryMovie();
    this.SciFiMovie();
    this.thrillerMovie();

  }

  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {

      this.bannerResult = result.results;

    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {


      this.trendingMovieResult = result.results;

    })
  }

  // action
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {

      this.actionMovieResult = result.results;

    });
  }

  // adventure
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {

      this.adventureMovieResult = result.results;

    });
  }

  // animation
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {

      this.animationMovieResult = result.results;

    });
  }

  // comedy
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {

      this.comedyMovieResult = result.results;

    });
  }

  // documentary

  documenteryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {

      this.documentaryMovieResult = result.results;

    });
  }


  // science fiction

  SciFiMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {

      this.sciencefictionMovieResult = result.results;

    });
  }

  // thriller

  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {

      this.thrillerMovieResult = result.results;

    });
  }









}
