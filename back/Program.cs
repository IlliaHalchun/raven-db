using TestRavenDB.Repositories;
using TestRavenDB.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add Dependencies
builder.Services.AddSingleton<IDataBaseService, DataBaseService>();

builder.Services.AddSingleton<IParkingAreasRepository, ParkingAreasRepository>();
builder.Services.AddSingleton<IParkingAreasService, ParkingAreasService>();

builder.Services.AddSingleton<IParkingsRepository, ParkingsRepository>();
builder.Services.AddSingleton<IParkingsService, ParkingsService>();

var app = builder.Build();

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
