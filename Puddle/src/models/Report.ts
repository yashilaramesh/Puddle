// src/models/Report.ts
const mongoose = require('mongoose');
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// @Entity()
// export class Report {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     description: string;

//     @Column()
//     location: string;

//     @Column()
//     media: string;

//     @Column({ default: 'Pending' })
//     status: string;

//     @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//     createdAt: Date;
// }
export const reportSchema = new mongoose.Schema({
    createdAt: {type: Date, required: true},

})
