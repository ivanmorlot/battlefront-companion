import { CreateHeroData, PatchHeroData } from '~interfaces/heroes.interface';
import { Hero } from '~models';

export class HeroesService {
  getHero = async (heroId: string) => {
    return await Hero.findById(heroId).lean();
  };

  getHeroes = async () => {
    return await Hero.find().lean();
  };

  createHero = async (heroData: CreateHeroData) => {
    const newHero = new Hero();

    newHero.name = heroData.name;
    newHero.type = heroData.type;
    newHero.hp = heroData.hp;
    newHero.regen = heroData.regen;

    await newHero.save();

    return newHero;
  };

  updateHero = async (heroId: string, heroData: PatchHeroData) => {
    const updatedHero = await Hero.findById(heroId);

    if (heroData.name) updatedHero.name = heroData.name;
    if (heroData.type) updatedHero.type = heroData.type;
    if (heroData.hp) updatedHero.hp = heroData.hp;
    if (heroData.regen) updatedHero.regen = heroData.regen;

    await updatedHero.save();

    return updatedHero;
  };

  deleteHero = async (heroId: string) => {
    await Hero.deleteOne({ _id: heroId });
  };
}
