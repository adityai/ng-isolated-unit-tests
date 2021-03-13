import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticleService {
  particles: string[] = ['Higgs Boson'];

  constructor() { }

  getParticles() {
    return this.particles;
  }
}
