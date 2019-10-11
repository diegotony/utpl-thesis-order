import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pick } from 'shared/dto/pick/pick.dto';
import { CreatePickDto } from 'shared/dto/pick/create-pick.dto';

@Injectable()
export class PickService {
    constructor(@InjectModel('Pick') private readonly pickModel: Model<Pick>) { }

    async createPick(createPickDto: CreatePickDto): Promise<Pick> {
        const createdPick = new this.pickModel(createPickDto);
        return await createdPick.save();
    }
    async findPicks(): Promise<Pick[]> {
        return await this.pickModel.find().exec();
    }

    async findPick(idPick: string): Promise<Pick> {
        return await this.pickModel.findById(idPick).exec();
    }
    async deletePick(idPick: string): Promise<Pick[]> {
        return await this.pickModel.findByIdAndRemove(idPick);
    }
    async editPick(idPick: string, dto: CreatePickDto) {
        return await this.pickModel.findByIdAndUpdate(idPick, dto, { new: true, runValidators: true });
    }
}
