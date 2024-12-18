import { Component, OnInit } from "@angular/core";
import { Album } from "../model/album";
import { AlbumService } from "../services/AlbumService";

@Component({
  selector: 'app-list-albums',
  templateUrl: './listalbum.component.html',
  styleUrls: ['./listalbum.component.css']
})
export class ListAlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data: any) => {
      this.albums = data as Album[];
    });    
  }
  
}
