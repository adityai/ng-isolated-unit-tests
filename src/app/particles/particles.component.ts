import { Component, OnInit } from '@angular/core';
import { ParticleService } from '../particle.service';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {

  constructor(public particleService: ParticleService) { }

  ngOnInit(): void {
    this.getParticles();
  }

  addParticle(newParticle: String): void {
    
  }

  getParticles(): void {
    this.particleService.particles;
  }
}
