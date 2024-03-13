import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums : Album[];
  loaded : boolean;
  newAlbum : Album;

  constructor(private albumService : AlbumsService) {
    this.albums = [];
    this.loaded = true;
    this.newAlbum = {} as Album;
  }

  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  removeAlbum(id: number){
    this.albums = this.albums.filter((x) => x.id !== id);
  }

  addAlbum(){
    if(this.newAlbum.title.length == 0 || this.newAlbum.id <= this.albums[this.albums.length-1].id)
      return;

    this.newAlbum.userId = this.albums[0].userId;

    this.loaded = false;
    this.albumService.addAlbum(this.newAlbum).subscribe((album) =>{
      this.albums.unshift(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    })
  }
}
