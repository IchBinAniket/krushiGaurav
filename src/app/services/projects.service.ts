import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  getProjects() {
    return [
      {
        title: 'Education',
        slug: 'education',
        shortDescription: 'Smart classrooms, e-learning, girl child education support in 10+ villages.',
        images: [
          'assets/images/education/cover.jpeg',
          'assets/images/education/classroomBenches.png',
          'assets/images/education/eclasroom2.jpg'
        ],
        currentImageIndex: 0
      },
      {
        title: 'Watershed Development',
        slug: 'watershed',
        shortDescription: 'Percolation tanks, check dams, and rainwater harvesting to combat drought.',
        images: [
          'assets/images/watershed/cover.jpg',
          'assets/images/watershed/deepCCTRain.jpg',
          'assets/images/watershed/devdaraTalav2.png',
          'assets/images/watershed/nalaDeepingrain.png',
          'assets/images/watershed/stoneOutlet1.jpg'
        ],
        currentImageIndex: 0
      },
      {
        title: 'Healthcare',
        slug: 'healthcare',
        shortDescription: 'Mobile clinics, RO drinking water systems, smoke-less chulhas.',
        images: [
          'assets/images/healthcare/drinkingWater1.jpg',
          'assets/images/healthcare/smokeLessChulhas2.jpg'
        ],
        currentImageIndex: 0
      },
      {
        title: 'Women Empowerment',
        slug: 'womenempowerment',
        shortDescription: 'SHGs, tailoring training, business loans, workshops, and micro-enterprises.',
        images: [
          'assets/images/womenEmpowerment/cover2.png',
          'assets/images/womenEmpowerment/cover1.png'
        ],
        currentImageIndex: 0
      },
      {
        title: 'Farmer Empowerment',
        slug: 'farmer-empowerment',
        shortDescription: 'Training in organic farming, solar tools, exhibitions, and vermicompost.',
        images: [
          'assets/images/farmerEmpowerment/cover.jpg',
          'assets/images/farmerEmpowerment/agriExpo1.jpg',
          'assets/images/farmerEmpowerment/vermicomopostPits3.jpg',
        ],
        currentImageIndex: 0
      },
      {
        title: 'Sustainability & Ecology',
        slug: 'sustainability',
        shortDescription: 'Tree plantations, rainwater harvesting, biogas and eco-awareness programs.',
        images: [
          'assets/images/ecology/treePlantation2.jpg',
          'assets/images/ecology/treePlantation.jpg',
          'assets/images/ecology/biogasplant2.jpg'
        ],
        currentImageIndex: 0
      }
    ];
  }
}
