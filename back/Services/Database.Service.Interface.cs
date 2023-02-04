using Raven.Client.Documents;
using TestRavenDB.Entities;

namespace TestRavenDB.Services;

public interface IDataBaseService
{
    IDocumentStore GetStore(); 
}
