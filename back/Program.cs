using TestRavenDB.Repositories;
using TestRavenDB.Services;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:3000");
        });
});

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add Database Dependencies
builder.Services.AddSingleton<IDataBaseService, DataBaseService>();

// Add ParkingAreas Dependencies
builder.Services.AddSingleton<IParkingAreasRepository, ParkingAreasRepository>();
builder.Services.AddSingleton<IParkingAreasService, ParkingAreasService>();

// Add Parkings Dependencies
builder.Services.AddSingleton<IParkingsRepository, ParkingsRepository>();
builder.Services.AddSingleton<IParkingsService, ParkingsService>();

var app = builder.Build();

app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
