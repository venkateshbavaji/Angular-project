

export class coursesservice{

   private courses: string[] = ['angular','dotnet','java','python'];

    getAll() {
        return this.courses;
    }
}