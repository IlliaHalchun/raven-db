using Raven.Client.Documents.Indexes;
using TestRavenDB.Models;

namespace TestRavenDB.Database.Indexes;


public class ParkingAreaModels_ByParkingUrn : AbstractIndexCreationTask<ParkingAreaModel>
{

	public class Result
	{
		public string? ParkingUrn;
	}

	public ParkingAreaModels_ByParkingUrn()
	{
		Map = parkingAreas => from parkingArea in parkingAreas
							  select new Result
							  {
								  ParkingUrn = parkingArea.Data!.ParkingUrn
							  };
    }
}