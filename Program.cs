var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();

var app = builder.Build();

app.UseStaticFiles(); // fichiers de wwwroot

app.UseRouting();
app.MapFallbackToFile("index-test.html"); // index.html par défaut

app.Run();