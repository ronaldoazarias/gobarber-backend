import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AddAvatarFieldToUsers1599733572090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'avatar',
            type: 'varchar', // google cloud storage, digital ocean spaces
            isNullable: true
        }));    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'avatar');
    }

}
